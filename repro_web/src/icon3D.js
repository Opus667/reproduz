import { canvas, dstqs } from './main';

// console.log("ahoy");
// console.log(dstqs.length);
export default function icon3D(element) {
    let i = 0;
    const setCounter = (i++); {
        console.log(`${i}`);
        canvas = document.getElementById(`${dstqs}3d`);

        //   element.innerHTML = `count is ${counter}`
    }
    element.addEventListener('click', () => setCounter(counter + 1));
    setCounter(0);
}
