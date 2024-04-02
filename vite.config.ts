import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
const htmlPlugin = () => {
  return {
    name: 'html-transform',
    transformIndexHtml(html) {
      return html.replace(
        /<title>(.*?)<\/title>/,
        `<title>TheF2e 立委競選官網 - 陳英渝</title>`,
      )
    },
  }
}
export default defineConfig({
  plugins: [react(), htmlPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
    }
  },
  base: './',
})
