/**
 * Substitui "/assets/" por "teste/" em todas as metas cujo
 * atributo content começa com "/assets/".
 */
function patchMetaAssets() {
  document
    .querySelectorAll('meta[content^="/assets/"]') // pega só quem começa com /assets/
    .forEach(meta => {
      const original = meta.getAttribute('content');
      const patched = original.replace(/^\/assets\// | /^\/src\//, 'teste/');
      meta.setAttribute('content', patched);
      meta.removeAttribute('property');
    });
}

// Chame quando o DOM já estiver pronto
document.addEventListener('DOMContentLoaded', patchMetaAssets);
