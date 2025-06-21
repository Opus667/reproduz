/* eslint-disable no-undef */
/* --------------------------------------------------------------------------
 * Imports & assets
 * ----------------------------------------------------------------------- */
import 'itemslide';
import '@lottiefiles/lottie-player';
import '@appnest/masonry-layout';

import PhotoSwipeLightbox from 'photoswipe/lightbox';
import PhotoSwipeDynamicCaption from 'photoswipe-dynamic-caption-plugin';

import '../scripts/updateGallery.js'; // só isso; não precisa exportar nada
import '../scripts/resolveMetaImgs.js'; // só isso; não precisa exportar nada

import 'photoswipe/style.css';
import 'photoswipe-dynamic-caption-plugin/photoswipe-dynamic-caption-plugin.css';

/* --------------------------------------------------------------------------
 * Configurações
 * ----------------------------------------------------------------------- */
const BREAKPOINT_MOBILE = 600;
const BREAKPOINT_LIGHTBOX = 700;

const LIGHTBOX_PADDING = {
  small: { top: 0, bottom: 0, left: 0, right: 0 },
  large: { top: 30, bottom: 30, left: 0, right: 0 },
};

/* --------------------------------------------------------------------------
 * Lightbox
 * ----------------------------------------------------------------------- */
function initLightbox() {
  const lightbox = new PhotoSwipeLightbox({
    gallerySelector: '#projetos-galeria',
    childSelector: '.gallery-item',
    paddingFn: ({ x }) =>
      x < BREAKPOINT_LIGHTBOX ? LIGHTBOX_PADDING.small : LIGHTBOX_PADDING.large,
    pswpModule: () => import('photoswipe'),
  });

  new PhotoSwipeDynamicCaption(lightbox, {
    captionContent: '.pswp-caption-content',
    mobileLayoutBreakpoint: BREAKPOINT_LIGHTBOX,
    type: 'auto',
    mobileCaptionOverlapRatio: 1,
  });

  lightbox.init();
}

/* --------------------------------------------------------------------------
 * Carrossel (Itemslide) + animação Lottie
 * ----------------------------------------------------------------------- */
function initCarousel() {
  const list = document.querySelector('#scrolling ul');
  if (!list) return;

  const slider = new Itemslide(list, { disableClickToSlide: true });

  list.addEventListener('carouselChangeActiveIndex', () => {
    const index = slider.getActiveIndex();
    const lottie = document
      .querySelectorAll('.destSwipe')
      [index]?.querySelector('lottie-player');

    if (lottie) {
      lottie.stop();
      lottie.play();
    }
  });
}

/* --------------------------------------------------------------------------
 * Ajustes de layout (mobile highlights)
 * ----------------------------------------------------------------------- */
function adaptHighlightsForMobile() {
  if (!window.matchMedia(`(max-width: ${BREAKPOINT_MOBILE}px)`).matches) return;

  // troca IDs para manter compatibilidade com o JS existente
  const blank = document.getElementById('dest_blank');
  blank?.remove();

  document.querySelectorAll('.dest').forEach(el => {
    el.classList.replace('dest', 'destSwipe');
  });

  document.getElementById('destScroll')?.setAttribute('id', 'scrolling');
  document.getElementById('dest_wrap')?.setAttribute('id', 'destScrollWrap');
}

/* --------------------------------------------------------------------------
 * Interações com os destaques
 * ----------------------------------------------------------------------- */
function initHighlightInteractions() {
  let activeHighlightId = null;
  const highlights = [...document.querySelectorAll('.dest, .destSwipe')];
  const container = document.getElementById('destaques');

  /* Lottie on hover (apenas quando visível) */
  const intersectionObserver =
    'IntersectionObserver' in window
      ? new IntersectionObserver(entries => {
          entries.forEach(entry => {
            const lottie = entry.target;
            if (entry.isIntersecting) {
              lottie.stop();
              lottie.play();
              intersectionObserver.unobserve(lottie);
            }
          });
        })
      : null;

  highlights.forEach(card => {
    // Hover → toca animação
    card.addEventListener('mouseenter', () => {
      const lottie = card.querySelector('lottie-player');
      if (intersectionObserver) {
        intersectionObserver.observe(lottie);
      } else {
        lottie.play();
      }
    });

    // Clique → alterna “active”
    card.addEventListener('click', () => {
      const id = card.id;
      const isSame = id === activeHighlightId;

      highlights.forEach(h => h.classList.remove('active'));
      activeHighlightId = isSame ? null : id;
      if (!isSame) card.classList.add('active');
    });
  });

  /* Clique fora do card → remove active */
  container?.addEventListener('click', evt => {
    const clickedId = evt.target.id;
    const parentId = evt.target.parentElement?.id;

    // zonas de “limbo” onde cancelling faz sentido
    const cancelZoneIds = [
      'destaques',
      'dest_tittle',
      'dest_blank',
      'dest_wrap',
    ];

    if (cancelZoneIds.includes(clickedId) || cancelZoneIds.includes(parentId)) {
      highlights.forEach(h => h.classList.remove('active'));
      activeHighlightId = null;
    }
  });
}

/* --------------------------------------------------------------------------
 * Tentativa de Masonry
 * ----------------------------------------------------------------------- */

function mobileMasonry() {
  const masonry = document.querySelector('masonry-layout');
  if (window.matchMedia(`(max-width: ${BREAKPOINT_MOBILE}px)`).matches) {
    masonry.setAttribute('cols', 3);
    masonry.setAttribute('gap', 10);
  } else {
    masonry.removeAttribute('cols');
    masonry.setAttribute('gap', 20);
  }
  masonry.layout();
}

/* --------------------------------------------------------------------------
 * Bootstrap
 * ----------------------------------------------------------------------- */
function bootstrap() {
  initLightbox();

  // itemslide precisa aguardar assets
  window.addEventListener('load', initCarousel);
  window.addEventListener('resize', () => {
    mobileMasonry();
  });

  document.addEventListener('DOMContentLoaded', () => {
    mobileMasonry();
    adaptHighlightsForMobile();
    initHighlightInteractions();
  });
}

bootstrap();
