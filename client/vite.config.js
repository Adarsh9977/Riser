import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import envcompatible from 'vite-plugin-env-compatible'
import envCompatible from 'vite-plugin-env-compatible'
// https://vitejs.dev/config/
export default defineConfig({
  envPrefix:"REACT_APP",
  plugins: [react(),
    envCompatible()
  ],
})
