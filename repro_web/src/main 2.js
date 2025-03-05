import './style.css'
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'
// import { SplineViewer } from '@splinetool/viewer';
import { Application } from '@splinetool/runtime';

// make sure you have a canvas in the body
const canvas_1 = document.getElementById('homenagem3d');
const canvas_2 = document.getElementById('trofeus3d');
const canvas_3 = document.getElementById('indicativos3d');
const canvas_4 = document.getElementById('tags3d');
const canvas_5 = document.getElementById('adesivos3d');
const canvas_6 = document.getElementById('laser3d');
const canvas_7 = document.getElementById('cnc3d');
const canvas_8 = document.getElementById('uv3d');

// start the application and load the scene (selfhosted)
const spline_1 = new Application(canvas_1);
const spline_2 = new Application(canvas_2);
const spline_3 = new Application(canvas_3);
const spline_4 = new Application(canvas_4);
const spline_5 = new Application(canvas_5);
const spline_6 = new Application(canvas_6);
const spline_7 = new Application(canvas_7);
const spline_8 = new Application(canvas_8);
spline_1.load('/3d/estojo.splinecode');
spline_2.load('/3d/indicativos.splinecode');
spline_3.load('/3d/trophy.splinecode');
spline_4.load('/3d/tags.splinecode');
spline_5.load('/3d/tags.splinecode');
spline_6.load('/3d/estojo.splinecode');
spline_7.load('/3d/trophy.splinecode');
spline_8.load('/3d/estojo2.splinecode');

// TODO: does not work?
// spline.setBackgroundColor('red');