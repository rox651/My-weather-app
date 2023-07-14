/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_API_WEATHER_KEY: string
  readonly VITE_APP_API_GEO_KEY: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
