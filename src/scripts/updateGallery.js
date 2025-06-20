// src/scripts/updateGallery.js
/**
 * 1. Importa todos os arquivos usados nos <a class="gallery-item"> do HTML.
 * 2. Constrói um mapa entre o caminho “original” e a URL com hash.
 * 3. Depois do DOM pronto, substitui href e src pela URL final.
 */

// (a) Importa as imagens dos href (full-size):
const bigImgs = import.meta.glob("../assets/gallery/*.{jpg,jpeg,png,webp,svg}", {
  eager: true,
  import: "default",        // faz o Vite devolver a URL final (string)
});

// (b) Importa thumbnails dentro de thumb/:
const thumbs = import.meta.glob(
  "../assets/gallery/thumbs/*.{jpg,jpeg,png,webp,svg}",
  { eager: true, import: "default" }
);

// (c) Concatena ambos em um único mapa:
const urlMap = { ...bigImgs, ...thumbs };
//        chave:  "../assets/gallery/img1.jpg"
//        valor:  "/assets/gallery/img1.8fdca3a1.jpg"

/**
 * Converte “/src/assets/gallery/img1.jpg” (como está no HTML)
 *           → "/assets/gallery/img1.8fdca3a1.jpg" (gerado na build)
 */
function resolveHashedUrl(originalPath) {
  // Remove o prefixo "/src" (caso você use assim no HTML)
  const clean = originalPath.replace(/^\/?src\//, "../");
  return urlMap[clean];
}

document.addEventListener("DOMContentLoaded", () => {
  // 1) <a class="gallery-item" href="…">
  document.querySelectorAll("a.gallery-item").forEach((a) => {
    const hashed = resolveHashedUrl(a.getAttribute("href"));
    if (hashed) a.setAttribute("href", hashed);
  });

  // 2) <a class="gallery-item"><img src="…"></a>
  document
    .querySelectorAll("a.gallery-item > img")
    .forEach((img) => {
      const hashed = resolveHashedUrl(img.getAttribute("src"));
      if (hashed) img.setAttribute("src", hashed);
    });
});
