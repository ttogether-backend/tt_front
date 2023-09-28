/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SERVER_HOST: string;
  readonly VITE_PUBLIC: string;
  readonly VITE_TEST_ID: string;
  readonly VITE_TEST_ACCESS_TOKEN: string;
  readonly VITE_TEST_REFRESH_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
