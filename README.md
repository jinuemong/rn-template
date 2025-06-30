# React Native FSD Template

Feature-Sliced Design (FSD) 아키텍처를 적용한 React Native 템플릿

## 🚀 Quick Start

### 1. 프로젝트 클론
```bash
git clone <your-repository-url>
cd rn-template
```

### 2. 자동 설정 (권장)

#### macOS
```bash
chmod +x setup-mac.sh
./setup-mac.sh
```

이 스크립트는 다음을 자동으로 처리합니다:
- ✅ Node.js 버전 확인 (18+ 권장)
- ✅ npm 설치 및 버전 확인
- ✅ 의존성 자동 설치 (`npm install`)
- ✅ Expo CLI 전역 설치
- ✅ Xcode 및 CocoaPods 확인 및 설치
- ✅ iOS 의존성 설치 (`pod install`)
- ✅ Java 및 Android 환경 확인
- ✅ Android 빌드 클린

### 3. 수동 설정

#### 의존성 설치
```bash
npm install
```

#### Expo CLI 설치
```bash
npm install -g @expo/cli
```

#### iOS 설정 (macOS만)
```bash
cd ios
rm -rf Pods build
pod install
cd ..
```

#### Android 설정
```bash
cd android
./gradlew clean
cd ..
```

## 📱 실행 명령어

```bash
# 개발 서버 시작
npm start

# Android 실행
npm run android

# iOS 실행 (macOS만)
npm run ios

# Web 실행
npm run web
```

## 🏗️ 프로젝트 구조

```
src/
├── app/           # 앱 설정 및 진입점
├── pages/         # 페이지 컴포넌트
├── widgets/       # 위젯 컴포넌트
├── features/      # 비즈니스 기능
├── entities/      # 비즈니스 엔티티
└── shared/        # 공통 유틸리티
```

## 📋 필수 요구사항

### Node.js
- Node.js 18.0.0 이상
- npm 8.0.0 이상

### Android 개발
- Android Studio
- Java JDK 11 이상
- Android SDK

### iOS 개발 (macOS만)
- Xcode 14.0 이상
- CocoaPods (`sudo gem install cocoapods`)

## 🔧 문제 해결

### iOS 빌드 오류
```bash
cd ios
rm -rf Pods build
pod install
cd ..
npx expo run:ios
```

### Android 빌드 오류
```bash
cd android
./gradlew clean
cd ..
npx expo run:android
```

### Metro 캐시 클리어
```bash
npx expo start --clear
```

## 📚 사용된 기술

- **React Native**: 0.79.4
- **Expo**: 53.0.13
- **React Navigation**: 7.x
- **TypeScript**: 5.8.3
- **Feature-Sliced Design**: 아키텍처 패턴

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📋 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.

## 빌드 및 실행 
- npx expo run:android or run:ios

## 🏗️ 프로젝트 구조

```
src/
├── app/                    # 애플리케이션 진입점
│   ├── App.tsx            # 메인 앱 컴포넌트
│   └── navigation/        # 네비게이션 설정
├── pages/                 # 페이지 컴포넌트들
│   ├── Navigation1Page.tsx # 첫 번째 탭 페이지
│   ├── Navigation2Page.tsx # 두 번째 탭 페이지
│   ├── Navigation3Page.tsx # 세 번째 탭 페이지
│   ├── Navigation4Page.tsx # 네 번째 탭 페이지
│   └── Navigation5Page.tsx # 다섯 번째 탭 페이지
├── widgets/               # 복합 UI 블록들
│   └── BottomNavigation.tsx # 바텀 네비게이션
├── features/              # 비즈니스 기능들
├── entities/              # 비즈니스 엔티티들
└── shared/                # 공통 유틸리티들
    ├── ui/                # 공통 UI 컴포넌트
    ├── lib/               # 유틸리티 함수들
    ├── api/               # API 클라이언트
    └── config/            # 설정 파일들
```

## 🚀 시작하기

### 1. 의존성 설치
```bash
npm install
# 또는
yarn install
```

### 2. 개발 서버 실행
```bash
npm start
# 또는
yarn start
```

### 3. iOS 시뮬레이터 실행
```bash
npm run ios
# 또는
yarn ios
```

### 4. Android 에뮬레이터 실행
```bash
npm run android
# 또는
yarn android
```

## 📱 기능

### 바텀 네비게이션
- **탭 1**: 첫 번째 탭 페이지
- **탭 2**: 두 번째 탭 페이지
- **탭 3**: 세 번째 탭 페이지
- **탭 4**: 네 번째 탭 페이지
- **탭 5**: 다섯 번째 탭 페이지

## 🎨 FSD 아키텍처

### 레이어 구조
1. **App Layer**: 애플리케이션 진입점, 전역 설정
2. **Pages Layer**: 라우트별 페이지 컴포넌트
3. **Widgets Layer**: 복합적인 UI 블록들
4. **Features Layer**: 비즈니스 기능들
5. **Entities Layer**: 도메인 엔티티들
6. **Shared Layer**: 공통 유틸리티들

### 의존성 규칙
- 상위 레이어는 하위 레이어에만 의존 가능
- 같은 레이어 내에서는 자유롭게 의존 가능
- 하위 레이어는 상위 레이어에 의존 불가

## 🔧 커스터마이징

### 새 페이지 추가
1. `src/pages/` 디렉토리에 새 페이지 컴포넌트 생성
2. `src/pages/index.ts`에 export 추가
3. `src/app/App.tsx`의 tabs 배열에 새 탭 추가

### 새 기능 추가
1. `src/features/` 디렉토리에 새 기능 폴더 생성
2. 기능별로 `ui/`, `model/`, `api/` 폴더 구성
3. `src/features/index.ts`에 export 추가

### 새 엔티티 추가
1. `src/entities/` 디렉토리에 새 엔티티 폴더 생성
2. 엔티티별로 `model/`, `ui/` 폴더 구성
3. `src/entities/index.ts`에 export 추가
