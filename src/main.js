import { Application } from '@splinetool/runtime';
// import SimpleParallax from "simple-parallax-js/vanilla";


const canvas = document.getElementById('creative_3d');
const spline = new Application(canvas);
spline.load('/img/creative.splinecode');
