// 앱 설정

export const APP_CONFIG = {
  name: 'RN Template App',
  version: '1.0.0',
  buildNumber: '1',
  
  // API 설정
  api: {
    baseURL: process.env.API_BASE_URL || 'https://api.example.com',
    timeout: 10000,
  },
  
  // 앱 설정
  settings: {
    defaultLanguage: 'ko',
    supportedLanguages: ['ko', 'en'],
    defaultTheme: 'light',
    supportedThemes: ['light', 'dark'],
  },
  
  // 기능 플래그
  features: {
    enablePushNotifications: true,
    enableAnalytics: true,
    enableCrashReporting: true,
  },
  
  // 개발 설정
  development: {
    enableLogging: __DEV__,
    enableDebugMenu: __DEV__,
    mockApi: __DEV__,
  },
} as const;

export type AppConfig = typeof APP_CONFIG; 