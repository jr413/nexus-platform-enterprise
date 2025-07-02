import Stripe from 'stripe';

// Stripe API Key の環境変数チェック
if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('STRIPE_SECRET_KEY is required');
}

// Stripe インスタンス作成
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2024-11-20.acacia',
  typescript: true,
});

// プライシングプラン定義
export const PRICING_PLANS = {
  starter: {
    id: 'starter',
    name: 'スターター',
    description: '中小企業・個人開発者向け',
    price: 9800,
    currency: 'jpy',
    interval: 'month',
    features: [
      'プロジェクト数: 最大5個',
      'ストレージ: 10GB',
      'API呼び出し: 100,000回/月',
      'ベーシックサポート',
      'SSL証明書込み',
      'CDN配信',
    ],
    limits: {
      projects: 5,
      storage: '10GB',
      apiCalls: 100000,
    },
  },
  professional: {
    id: 'professional',
    name: 'プロフェッショナル',
    description: '成長企業・開発チーム向け',
    price: 29800,
    currency: 'jpy',
    interval: 'month',
    features: [
      'プロジェクト数: 無制限',
      'ストレージ: 100GB',
      'API呼び出し: 1,000,000回/月',
      '優先サポート',
      'カスタムドメイン',
      'チーム管理機能',
      'デプロイメント自動化',
      '分析レポート',
    ],
    limits: {
      projects: -1, // unlimited
      storage: '100GB',
      apiCalls: 1000000,
    },
    popular: true,
  },
  enterprise: {
    id: 'enterprise',
    name: 'エンタープライズ',
    description: '大企業・エンタープライズ向け',
    price: 98000,
    currency: 'jpy',
    interval: 'month',
    features: [
      'すべての機能',
      'ストレージ: 1TB〜',
      'API呼び出し: 無制限',
      '24/7 専任サポート',
      'オンプレミス対応',
      'セキュリティ監査',
      'SLA保証 99.9%',
      'カスタム統合',
      '専任CSM',
    ],
    limits: {
      projects: -1, // unlimited
      storage: '1TB+',
      apiCalls: -1, // unlimited
    },
    custom: true,
  },
} as const;

// 日本の消費税率
export const JAPAN_TAX_RATE = 0.1; // 10%

// Stripe プロダクト・プライス作成関数
export async function createStripeProducts() {
  const products: { [key: string]: { productId: string; priceId: string } } = {};

  for (const [planId, plan] of Object.entries(PRICING_PLANS)) {
    try {
      // プロダクト作成
      const product = await stripe.products.create({
        id: `nexus_${planId}`,
        name: `Nexus Platform - ${plan.name}`,
        description: plan.description,
        metadata: {
          plan_id: planId,
          features: JSON.stringify(plan.features),
          limits: JSON.stringify(plan.limits),
        },
      });

      // プライス作成（税込み価格）
      const price = await stripe.prices.create({
        product: product.id,
        unit_amount: Math.round(plan.price * (1 + JAPAN_TAX_RATE)),
        currency: plan.currency,
        recurring: {
          interval: plan.interval as 'month',
        },
        tax_behavior: 'inclusive',
        metadata: {
          plan_id: planId,
          base_price: plan.price.toString(),
          tax_rate: JAPAN_TAX_RATE.toString(),
        },
      });

      products[planId] = {
        productId: product.id,
        priceId: price.id,
      };

      console.log(`Created product and price for ${plan.name}:`, {
        productId: product.id,
        priceId: price.id,
      });
    } catch (error) {
      console.error(`Error creating product for ${planId}:`, error);
    }
  }

  return products;
}

// カスタマー作成関数
export async function createStripeCustomer(
  email: string,
  name: string,
  metadata: Record<string, string> = {}
) {
  return await stripe.customers.create({
    email,
    name,
    metadata: {
      platform: 'nexus',
      created_at: new Date().toISOString(),
      ...metadata,
    },
  });
}

// サブスクリプション作成関数
export async function createSubscription(
  customerId: string,
  priceId: string,
  metadata: Record<string, string> = {}
) {
  return await stripe.subscriptions.create({
    customer: customerId,
    items: [{ price: priceId }],
    payment_behavior: 'default_incomplete',
    payment_settings: {
      save_default_payment_method: 'on_subscription',
      payment_method_types: ['card', 'konbini', 'customer_balance'],
    },
    expand: ['latest_invoice.payment_intent'],
    metadata: {
      platform: 'nexus',
      created_at: new Date().toISOString(),
      ...metadata,
    },
  });
}

// プラン変更関数
export async function changeSubscriptionPlan(
  subscriptionId: string,
  newPriceId: string
) {
  const subscription = await stripe.subscriptions.retrieve(subscriptionId);
  
  return await stripe.subscriptions.update(subscriptionId, {
    items: [{
      id: subscription.items.data[0].id,
      price: newPriceId,
    }],
    proration_behavior: 'create_prorations',
  });
}

// サブスクリプションキャンセル関数
export async function cancelSubscription(
  subscriptionId: string,
  immediately: boolean = false
) {
  if (immediately) {
    return await stripe.subscriptions.cancel(subscriptionId);
  } else {
    return await stripe.subscriptions.update(subscriptionId, {
      cancel_at_period_end: true,
    });
  }
}

// 請求履歴取得関数
export async function getBillingHistory(customerId: string, limit: number = 10) {
  return await stripe.invoices.list({
    customer: customerId,
    limit,
    expand: ['data.subscription', 'data.payment_intent'],
  });
}

// 支払い方法設定関数
export async function setupPaymentMethod(customerId: string) {
  return await stripe.setupIntents.create({
    customer: customerId,
    payment_method_types: ['card', 'konbini'],
    usage: 'off_session',
  });
}

// エンタープライズ見積もり作成関数
export async function createEnterpriseQuote(
  customerId: string,
  requirements: {
    estimatedUsers: number;
    estimatedStorage: string;
    estimatedApiCalls: number;
    additionalFeatures: string[];
    contractLength: number; // months
  }
) {
  // カスタム価格計算ロジック
  let basePrice = PRICING_PLANS.enterprise.price;
  
  // ユーザー数に基づく追加料金
  if (requirements.estimatedUsers > 100) {
    basePrice += (requirements.estimatedUsers - 100) * 500;
  }
  
  // API呼び出し数に基づく追加料金
  if (requirements.estimatedApiCalls > 10000000) {
    basePrice += Math.floor((requirements.estimatedApiCalls - 10000000) / 1000000) * 5000;
  }
  
  // 長期契約割引
  const discount = requirements.contractLength >= 12 ? 0.15 : 0;
  const finalPrice = Math.round(basePrice * (1 - discount));
  
  // Stripe Quote 作成
  return await stripe.quotes.create({
    customer: customerId,
    line_items: [{
      price_data: {
        currency: 'jpy',
        product_data: {
          name: 'Nexus Platform - エンタープライズカスタムプラン',
          description: `カスタム要件: ${requirements.estimatedUsers}ユーザー, ${requirements.estimatedStorage}ストレージ, ${requirements.estimatedApiCalls.toLocaleString()}API呼び出し/月`,
        },
        unit_amount: Math.round(finalPrice * (1 + JAPAN_TAX_RATE)),
        recurring: {
          interval: 'month',
        },
      },
      quantity: 1,
    }],
    metadata: {
      plan_type: 'enterprise_custom',
      estimated_users: requirements.estimatedUsers.toString(),
      estimated_storage: requirements.estimatedStorage,
      estimated_api_calls: requirements.estimatedApiCalls.toString(),
      additional_features: JSON.stringify(requirements.additionalFeatures),
      contract_length: requirements.contractLength.toString(),
      base_price: basePrice.toString(),
      discount_rate: discount.toString(),
      final_price: finalPrice.toString(),
    },
  });
}

// Webhook署名検証関数
export function verifyWebhookSignature(
  payload: string | Buffer,
  signature: string,
  secret: string
): Stripe.Event {
  return stripe.webhooks.constructEvent(payload, signature, secret);
}