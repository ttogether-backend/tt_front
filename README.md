# Travel Together boilerplate

### 개발 환경

- 코어: React, TypeScript, Next.js
- 상태 관리: React-Query, Recoil
- 스타일링: Emotion +a
- 패키지 매니저: Yarn Berry, Pnpm
- 빌드: Vite

### TODO

- [ ] MSW 설정 추가
- [ ] husky를 이용한 커밋 컨벤션 추가
- [ ] 유저 로그인 , 세션 만료 리디렉션 공통 로직 추가 ('로그인 기능' 아님!)
- [ ] 에러 처리 로직 추가
  - [ ] Error Boundary
  - [ ] API 공통 에러/ 네트워크 에러 처리 다이얼로그
- [ ] 공통 컴포넌트 추가
  - [ ] NavBar
  - [ ] Footer
  - [ ] 잘못된 경로 진입시 보여주는 Not Found 페이지
- [ ] 공통으로 사용하는 라이브러리 패키지 install
  - [ ] emotion
  - [ ] react-query
  - [ ] recoil
  - [ ] react-router-dom

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
