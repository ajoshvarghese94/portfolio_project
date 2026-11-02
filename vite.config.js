import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { defineConfig } from 'vite'

// https://vite.dev/config/
// VITE_BASE is set automatically by the GitHub Actions workflow so the site
// works under https://<user>.github.io/<repo-name>/ (or at the root for
// <user>.github.io repos). Locally it defaults to '/'.
export default defineConfig({
  base: process.env.VITE_BASE || '/',
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
})
