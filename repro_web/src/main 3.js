import './style.css'
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'
// import { SplineViewer } from '@splinetool/viewer';
import { Application } from '@splinetool/runtime';

export const dstqs = ["homage","signs","tags","stickers","trophy","laser","cnc","uv"];
let i = 0;
// let canvas = [];
// let spline = [];


console.log(`${dstqs[index]}3d`)

dstqs.forEach((item, index) => {
    // console.log(`aaaaa${canvas[index]}`);
    console.log(`${dstqs[index]}3d`)
    // canvas = document.getElementById(`${dstqs[index]}3d`);
    console.log(`${canvas}aaa`);
    // spline[index] = new Application(canvas);
    // const spline_1 = new Application(canvas_1);

    // spline[index].load(`/3d/${dstqs[item]}.splinecode`);
    console.log(`/3d/${dstqs[item]}.splinecode`);
});


// const canvas =[];

// dstqs.forEach((item, index) => {
    //     console.log(`${dstqs[index]}`);
    //     canvas[index] = document.getElementById(`${dstqs[index]}3d`);
    //     console.log(`aaaaa${canvas[index]}`);
// });



// export function importa3D(element) {
//     let counter = 0
//     const importa3D = (count) => {
//         counter = count
//     element.getElementsById= `${dstqs[counter]}`.add
// }
//     document.getElementsByTagName(`canvas`)
//     importa3D(0)
// }




// export let canvas = [0];
// let spline = [0];
// export function icon3D(element) {
//     let i = 0
//     const setCounter = (i++) => {
//         canvas = document.getElementById(`${dstqs[i]}3d`);
      
//     //   element.innerHTML = `count is ${counter}`
//     };
//     element.addEventListener('click', () => setCounter(counter + 1))
//     setCounter(0)
//   };