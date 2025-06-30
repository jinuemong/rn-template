// 공통 스토리지 유틸리티

export interface StorageInterface {
  getItem(key: string): Promise<string | null>;
  setItem(key: string, value: string): Promise<void>;
  removeItem(key: string): Promise<void>;
  clear(): Promise<void>;
}

// AsyncStorage 래퍼 (실제 구현에서는 @react-native-async-storage/async-storage 사용)
export class AsyncStorageWrapper implements StorageInterface {
  async getItem(key: string): Promise<string | null> {
    try {
      // 실제 구현에서는 AsyncStorage.getItem(key) 사용
      const value = localStorage.getItem(key);
      return value;
    } catch (error) {
      console.error('Storage getItem error:', error);
      return null;
    }
  }

  async setItem(key: string, value: string): Promise<void> {
    try {
      // 실제 구현에서는 AsyncStorage.setItem(key, value) 사용
      localStorage.setItem(key, value);
    } catch (error) {
      console.error('Storage setItem error:', error);
    }
  }

  async removeItem(key: string): Promise<void> {
    try {
      // 실제 구현에서는 AsyncStorage.removeItem(key) 사용
      localStorage.removeItem(key);
    } catch (error) {
      console.error('Storage removeItem error:', error);
    }
  }

  async clear(): Promise<void> {
    try {
      // 실제 구현에서는 AsyncStorage.clear() 사용
      localStorage.clear();
    } catch (error) {
      console.error('Storage clear error:', error);
    }
  }
}

// 스토리지 인스턴스
export const storage = new AsyncStorageWrapper();

// 편의 함수들
export const storageKeys = {
  USER_TOKEN: 'user_token',
  USER_PROFILE: 'user_profile',
  APP_SETTINGS: 'app_settings',
  THEME: 'theme',
} as const;

export const getStoredData = async <T>(key: string): Promise<T | null> => {
  try {
    const data = await storage.getItem(key);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error('getStoredData error:', error);
    return null;
  }
};

export const setStoredData = async <T>(key: string, data: T): Promise<void> => {
  try {
    await storage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error('setStoredData error:', error);
  }
};

export const removeStoredData = async (key: string): Promise<void> => {
  try {
    await storage.removeItem(key);
  } catch (error) {
    console.error('removeStoredData error:', error);
  }
}; 