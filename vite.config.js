// vite.config.js
import { defineConfig } from 'vite';
import netlify from '@netlify/vite-plugin';
/**
 * Exemplo de configuração básica para projetos
 * que usam apenas JavaScript puro (Vanilla JS).
 *
 * ①  O `base` define o caminho base dos assets na build.
 * ②  O `build.outDir` define onde a pasta `dist` será gerada.
 * ③  `resolve.alias` encurta imports longos de caminhos.
 * ④  `server` configura o dev-server local.
 * ⑤  `plugins` – aqui você poderia adicionar, por exemplo,
 *     o @netlify/vite-plugin ou vite-plugin-html, etc.
 */

export default defineConfig({
  // ① Caminho base (útil se o site ficará em um subdiretório
  //   ou se você quer o domínio completo vindo de variável de ambiente)
  base: process.env.BASE_URL || 'https://reproduz.netlify.app/',

  // ② Configurações específicas de build
  build: {
    outDir: 'dist', // pasta de saída (default já é dist)
    assetsDir: 'assets', // subpasta para JS/CSS/img gerados
    sourcemap: true, // true se quiser .map na produção
  },

  // ③ Atalhos de importação
  resolve: {
    alias: {
      '@': '/src', // agora você pode importar "@/utils.js"
      '@img': '/src/assets', // e "@/assets/logo.svg" vira "@img/logo.svg"
    },
  },

  // ④ Dev-server (vite dev)
  server: {
    port: 5173, // porta local
    open: true, // abrir o navegador
    strictPort: false, // se a porta estiver ocupada, Vite tenta outra
  },

  // ⑤ Plugins extra (opcionais)
  plugins: [
    // exemplo:
    netlify(),
  ],

  // ⑥ Variáveis de ambiente adicionais para o front
  define: {
    __APP_ENV__: JSON.stringify(process.env.VITE_APP_ENV || 'development'),
  },
});
