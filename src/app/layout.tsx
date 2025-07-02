import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NEXUS Platform - 次世代Webアプリケーション開発',
  description: '日本企業のDX推進を支援するNEXUSプラットフォーム',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <style>{`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Hiragino Sans', 'Hiragino Kaku Gothic ProN', 'BIZ UDPGothic', 'Yu Gothic', 'Meiryo', sans-serif;
            line-height: 1.6;
            color: #333;
            background: #fff;
          }
          .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
          }
          .hero {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 80px 0;
            text-align: center;
          }
          .hero h1 {
            font-size: 48px;
            margin-bottom: 20px;
            font-weight: bold;
          }
          .hero p {
            font-size: 20px;
            margin-bottom: 30px;
          }
          .btn {
            display: inline-block;
            padding: 15px 30px;
            background: white;
            color: #667eea;
            text-decoration: none;
            border-radius: 5px;
            font-weight: bold;
            transition: transform 0.2s;
          }
          .btn:hover {
            transform: translateY(-2px);
          }
          .features {
            padding: 80px 0;
          }
          .features h2 {
            text-align: center;
            font-size: 36px;
            margin-bottom: 50px;
          }
          .feature-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
          }
          .feature-card {
            padding: 30px;
            background: #f7f7f7;
            border-radius: 10px;
            text-align: center;
          }
          .feature-card h3 {
            font-size: 24px;
            margin-bottom: 15px;
            color: #667eea;
          }
          .feature-card p {
            color: #666;
          }
          @media (max-width: 768px) {
            .hero h1 {
              font-size: 32px;
            }
            .hero p {
              font-size: 16px;
            }
          }
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  );
}