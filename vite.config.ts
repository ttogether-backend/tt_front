import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   build: {
//     minify: false,
//   },
//   resolve: {
//     alias: {
//       src: path.resolve(__dirname, './src')
//     }
//   },
//   server: {
//     proxy: {
//       '/api': import.meta.env.VITE_SERVER_HOST,
//        // 모든 '/api'로 시작하는 요청은 'http://localhost:5000'으로 프록시됩니다.
//     },
//   },
// });

export default ({ mode }) => {
  process.env = {...process.env, ...loadEnv(mode, process.cwd())};

  // import.meta.env.VITE_NAME available here with: process.env.VITE_NAME
  // import.meta.env.VITE_PORT available here with: process.env.VITE_PORT

  return defineConfig({
    plugins: [react()],
    build: {
      minify: false,
    },
    resolve: {
      alias: {
        src: path.resolve(__dirname, './src')
      }
    },
    server: {
      proxy: {
        '/api': process.env.VITE_SERVER_HOST,
      },
    },
  });
}
