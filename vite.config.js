// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  root: './src', // Diretório raiz do projeto
  base: '/', // Caminho base para desenvolvimento e produção
  server: {
    host: '0.0.0.0', // Permite acesso via LAN
    port: 5173, // Porta padrão do Vite
    open: true, // Abre o navegador automaticamente
    proxy: {
      '/api': {
        target: 'http://localhost:5000', // Alvo do proxy
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  build: {
    outDir: '../dist', // Diretório de saída
    sourcemap: true, // Geração de sourcemaps
    minify: 'esbuild', // Minificador padrão
  },
  resolve: {
    alias: {
      '@': '/src', // Atalho para o diretório src
    },
  },
})
