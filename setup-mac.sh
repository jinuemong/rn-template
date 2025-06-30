#!/bin/bash

echo "🚀 React Native FSD Template Setup for macOS"
echo "============================================"

# 색상 정의
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# 함수: 성공 메시지
success() {
    echo -e "${GREEN}✅ $1${NC}"
}

# 함수: 경고 메시지
warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

# 함수: 오류 메시지
error() {
    echo -e "${RED}❌ $1${NC}"
}

# 함수: 정보 메시지
info() {
    echo -e "${BLUE}ℹ️  $1${NC}"
}

# Node.js 버전 확인
echo "📋 Checking Node.js version..."
if command -v node &> /dev/null; then
    NODE_VERSION=$(node --version | cut -d'v' -f2)
    NODE_MAJOR=$(echo $NODE_VERSION | cut -d'.' -f1)
    
    if [ "$NODE_MAJOR" -ge 18 ]; then
        success "Node.js $NODE_VERSION detected"
    else
        warning "Node.js $NODE_VERSION detected. Recommended: Node.js 18+"
    fi
else
    error "Node.js not found. Please install Node.js 18+ from https://nodejs.org/"
    exit 1
fi

# npm 버전 확인
if command -v npm &> /dev/null; then
    NPM_VERSION=$(npm --version)
    success "npm $NPM_VERSION detected"
else
    error "npm not found"
    exit 1
fi

# 의존성 설치
echo ""
info "Installing dependencies..."
if npm install; then
    success "Dependencies installed successfully"
else
    error "Failed to install dependencies"
    exit 1
fi

# Expo CLI 설치 (전역)
echo ""
info "Installing Expo CLI globally..."
if npm install -g @expo/cli; then
    success "Expo CLI installed successfully"
else
    warning "Failed to install Expo CLI globally. You can still use 'npx expo'"
fi

# iOS 설정
echo ""
info "Setting up iOS environment..."

# Xcode 확인
if command -v xcodebuild &> /dev/null; then
    XCODE_VERSION=$(xcodebuild -version | head -n 1)
    success "$XCODE_VERSION detected"
else
    error "Xcode not found. Please install Xcode from App Store"
    exit 1
fi

# CocoaPods 확인
if command -v pod &> /dev/null; then
    POD_VERSION=$(pod --version)
    success "CocoaPods $POD_VERSION detected"
else
    warning "CocoaPods not found. Installing..."
    if sudo gem install cocoapods; then
        success "CocoaPods installed successfully"
    else
        error "Failed to install CocoaPods"
        exit 1
    fi
fi

# iOS 폴더가 있는지 확인
if [ -d "ios" ]; then
    info "Installing iOS dependencies..."
    cd ios
    rm -rf Pods build
    if pod install; then
        success "iOS dependencies installed successfully"
    else
        error "Failed to install iOS dependencies"
        cd ..
        exit 1
    fi
    cd ..
else
    warning "iOS folder not found. Run 'npx expo run:ios' to generate iOS project."
fi

# Android 설정
echo ""
info "Setting up Android environment..."

# Java 확인
if command -v java &> /dev/null; then
    JAVA_VERSION=$(java -version 2>&1 | head -n 1)
    success "Java detected: $JAVA_VERSION"
else
    warning "Java not found. Please install Java JDK 11+"
fi

# Android 폴더가 있는지 확인
if [ -d "android" ]; then
    info "Cleaning Android build..."
    cd android
    if ./gradlew clean; then
        success "Android build cleaned successfully"
    else
        warning "Failed to clean Android build"
    fi
    cd ..
else
    warning "Android folder not found. Run 'npx expo run:android' to generate Android project."
fi

echo ""
echo "🎉 Setup completed successfully!"
echo ""
echo "📱 Available commands:"
echo "  npm start          - Start Expo development server"
echo "  npm run android    - Run on Android"
echo "  npm run ios        - Run on iOS"
echo "  npm run web        - Run on web"
echo ""
echo "🔧 Additional setup:"
echo "  - Make sure you have Android Studio installed for Android development"
echo "  - Make sure you have Android SDK installed"
echo "  - For iOS: Make sure you have Xcode command line tools installed"
echo ""
echo "🚀 Ready to start development!" 