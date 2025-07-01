// モバイルフレンドリー最適化設定

export const mobileOptimization = {
  viewport: {
    width: 'device-width',
    initialScale: 1,
    minimumScale: 1,
    maximumScale: 5,
    userScalable: 'yes',
    viewportFit: 'cover',
  },

  performance: {
    lazyLoading: true,
    imageOptimization: {
      formats: ['webp', 'avif', 'jpg'],
      sizes: {
        mobile: '100vw',
        tablet: '50vw',
        desktop: '33vw',
      },
      quality: 80,
    },
    codesplitting: true,
    preloading: ['critical CSS', 'hero images', 'primary fonts'],
  },

  touchOptimization: {
    minTouchTarget: 44, // px
    tapHighlight: 'transparent',
    calloutDisabled: true,
    textSizeAdjust: 'none',
    touchActions: {
      scrollable: 'pan-y',
      buttons: 'manipulation',
      forms: 'manipulation',
    },
  },

  typography: {
    baseFontSize: {
      mobile: '16px',
      tablet: '17px',
      desktop: '18px',
    },
    lineHeight: {
      mobile: 1.5,
      tablet: 1.6,
      desktop: 1.7,
    },
    headings: {
      h1: {
        mobile: '28px',
        tablet: '32px',
        desktop: '36px',
      },
      h2: {
        mobile: '24px',
        tablet: '28px',
        desktop: '32px',
      },
      h3: {
        mobile: '20px',
        tablet: '24px',
        desktop: '28px',
      },
    },
  },

  layout: {
    breakpoints: {
      mobile: '320px',
      phablet: '480px',
      tablet: '768px',
      desktop: '1024px',
      wide: '1200px',
    },
    gridSystem: {
      columns: {
        mobile: 4,
        tablet: 8,
        desktop: 12,
      },
      gutters: {
        mobile: '16px',
        tablet: '24px',
        desktop: '32px',
      },
    },
    spacing: {
      mobile: {
        xs: '8px',
        sm: '16px',
        md: '24px',
        lg: '32px',
        xl: '48px',
      },
      desktop: {
        xs: '12px',
        sm: '24px',
        md: '36px',
        lg: '48px',
        xl: '64px',
      },
    },
  },
};

export const japaneseTypography = {
  fontStacks: {
    primary: [
      'Noto Sans JP',
      'Hiragino Kaku Gothic ProN',
      'Hiragino Sans',
      'Meiryo',
      'sans-serif',
    ],
    secondary: [
      'Yu Gothic Medium',
      'Noto Sans JP',
      'Hiragino Kaku Gothic ProN',
      'sans-serif',
    ],
    monospace: [
      'Menlo',
      'Monaco',
      'Consolas',
      'Liberation Mono',
      'Courier New',
      'monospace',
    ],
  },

  lineBreaking: {
    wordBreak: 'keep-all',
    overflowWrap: 'break-word',
    lineBreak: 'strict',
    hangingPunctuation: 'first last',
  },

  verticalRhythm: {
    baseLineHeight: 1.75,
    scaleRatio: 1.25,
    verticalMargin: '1.75rem',
  },
};

export const mobileMenuConfiguration = {
  hamburgerMenu: {
    position: 'top-right',
    animationType: 'slide',
    overlayColor: 'rgba(0, 0, 0, 0.5)',
    closeOnOutsideClick: true,
    closeOnEscape: true,
  },

  navigation: {
    maxItems: 6,
    showLabels: true,
    iconSize: '24px',
    activeIndicator: 'underline',
    subMenus: {
      type: 'accordion',
      expandIcon: 'chevron-down',
      collapseIcon: 'chevron-up',
    },
  },

  bottomTabBar: {
    items: [
      { label: 'ホーム', icon: 'home', href: '/' },
      { label: 'サービス', icon: 'services', href: '/services' },
      { label: '料金', icon: 'pricing', href: '/pricing' },
      { label: '事例', icon: 'cases', href: '/cases' },
      { label: 'お問合せ', icon: 'contact', href: '/contact' },
    ],
    height: '64px',
    backgroundColor: '#ffffff',
    borderTop: '1px solid #e5e7eb',
  },
};

export const formOptimization = {
  inputFields: {
    minHeight: '48px',
    fontSize: '16px', // iOS zoom防止
    padding: '12px 16px',
    borderRadius: '8px',
    focusRing: true,
  },

  validation: {
    realTimeValidation: true,
    errorDisplay: 'inline',
    successIndicators: true,
    requiredFieldMarkers: true,
  },

  japaneseInputMethods: {
    ime: {
      compositionMode: 'on',
      inputMode: {
        hiragana: 'hiragana',
        katakana: 'katakana',
        numeric: 'numeric',
        email: 'email',
        tel: 'tel',
      },
    },
    autoComplete: {
      name: 'name',
      email: 'email',
      tel: 'tel',
      organization: 'organization',
      addressLine1: 'address-line1',
      addressLine2: 'address-line2',
      postalCode: 'postal-code',
    },
  },

  progressIndicators: {
    type: 'step-by-step',
    showPercentage: true,
    allowBackNavigation: true,
    saveProgress: true,
  },
};

export const accessibilityFeatures = {
  textReadability: {
    contrast: {
      normal: 4.5,
      large: 3.0,
      enhanced: 7.0,
    },
    fontSizeControls: {
      default: '16px',
      large: '20px',
      extraLarge: '24px',
    },
  },

  keyboardNavigation: {
    focusIndicators: 'visible',
    skipLinks: true,
    tabOrder: 'logical',
    accessKeys: false, // 日本語環境では一般的でない
  },

  screenReaderSupport: {
    landmarks: true,
    headingStructure: 'hierarchical',
    altText: 'descriptive',
    ariaLabels: 'comprehensive',
    liveRegions: 'polite',
  },

  language: {
    primary: 'ja',
    dir: 'ltr',
    readingDirection: 'horizontal',
    textOrientation: 'mixed',
  },
};

export const performanceMetrics = {
  coreWebVitals: {
    LCP: '< 2.5s', // Largest Contentful Paint
    FID: '< 100ms', // First Input Delay
    CLS: '< 0.1', // Cumulative Layout Shift
    FCP: '< 1.8s', // First Contentful Paint
    TTI: '< 3.8s', // Time to Interactive
  },

  mobileSpecific: {
    loadTime3G: '< 5s',
    timeToFirstByte: '< 800ms',
    criticalResourceHints: true,
    resourceHints: ['dns-prefetch', 'preconnect', 'preload', 'prefetch'],
  },

  optimizationTechniques: [
    'Critical CSS inlining',
    'Above-the-fold optimization',
    'Progressive image loading',
    'Font display optimization',
    'JavaScript code splitting',
    'Service Worker caching',
    'CDN optimization',
  ],
};

export const localizationSettings = {
  dateTime: {
    locale: 'ja-JP',
    timeZone: 'Asia/Tokyo',
    calendar: 'japanese',
    numberingSystem: 'latn',
    formats: {
      date: 'YYYY年MM月DD日',
      time: 'HH:mm',
      dateTime: 'YYYY年MM月DD日 HH:mm',
    },
  },

  currency: {
    code: 'JPY',
    symbol: '¥',
    position: 'before',
    thousandSeparator: ',',
    decimalSeparator: '.',
  },

  culturalAdaptations: {
    colorAssociations: {
      trust: '#0066cc', // 青系
      success: '#00cc66', // 緑系
      warning: '#ff9900', // オレンジ系
      error: '#cc0000', // 赤系
    },
    iconography: 'international',
    readingPattern: 'Z-pattern',
    formality: 'polite',
  },
};
