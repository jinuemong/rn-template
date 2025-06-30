// User entity 타입 정의
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  bio?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserRole {
  id: string;
  name: string;
  permissions: string[];
}

export interface UserStatus {
  isActive: boolean;
  isVerified: boolean;
  lastLoginAt?: Date;
} 