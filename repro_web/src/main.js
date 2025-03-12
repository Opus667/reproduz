import { Application } from '@splinetool/runtime';
import SimpleParallax from "simple-parallax-js/vanilla";

export const dstqs = ["homage","signs","tags","sticker","trophy","laser","cnc","uv"];
let i = 0;
export const spliner  =[0];
export const canvas  =[0];

// document.getElementById('parallax_01', () => {
// 	this = SimpleParallax();
// });

// let parallax_01 = document.getElamentById('parallax_01').simpleParallax();

// document.getElamentById('parallax_03', () => {
	// 	return this.SimpleParallax();
	// });
	
	// document.getElamentById('parallax_03').SimpleParallax(this.element);

// let para01.SimpleParallax(document.getElementById('parallax_01'));
	// let para01 = Application(document.getElementById("parallax_03").SimpleParallax(para01));
	const para01 = new SimpleParallax(document.getElementById("parallax_02"), {orientation:'up', scale: 1.3, customWrapper:"breakWrap"});
	const para02 = new SimpleParallax(document.getElementById("parallax_01"), {orientation:'up', scale: 1.75, customWrapper:"breakWrap"});
	const para03 = new SimpleParallax(document.getElementById("parallax_03"), {orientation:'up', scale: 1.2, customWrapper:"breakWrap"});
	const para04 = new SimpleParallax(document.getElementById("parallax_04"), {orientation:'up', scale: 1.5, customWrapper:"breakWrap"});
	
	
	
	
	// console.log(`hello`);
	// console.log(`${dstqs[0]}3d`);
	// console.log(`okkkk??`);
	// console.log(document.getElementById(`${dstqs[3]}3d`));
	


	const spline00 = new Application(document.getElementById(`${dstqs[0]}3d`)).load(`3d/${dstqs[0]}.splinecode`);
	const spline01 = new Application(document.getElementById(`${dstqs[1]}3d`)).load(`3d/${dstqs[1]}.splinecode`);
	const spline02 = new Application(document.getElementById(`${dstqs[2]}3d`)).load(`3d/${dstqs[2]}.splinecode`);
	const spline03 = new Application(document.getElementById(`${dstqs[3]}3d`)).load(`3d/${dstqs[3]}.splinecode`);
	const spline04 = new Application(document.getElementById(`${dstqs[4]}3d`)).load(`3d/${dstqs[4]}.splinecode`);
	const spline05 = new Application(document.getElementById(`${dstqs[5]}3d`)).load(`3d/${dstqs[5]}.splinecode`);
	const spline06 = new Application(document.getElementById(`${dstqs[6]}3d`)).load(`3d/${dstqs[6]}.splinecode`);
	const spline07 = new Application(document.getElementById(`${dstqs[7]}3d`)).load(`3d/${dstqs[7]}.splinecode`);

// document.addEventListener("DOMContentLoaded", () => {

// 	const observer = new IntersectionObserver(entries => {
// 	  entries.forEach(entry => {
// 		if (entry.isIntersecting) {
//             spliner[i] = new Application(entry.target).load(`3d/${dstqs[i]}.splinecode`)
//             i++   
//             return;          
// 		  return;
// 		}
// 	  });
// 	});

// 	// Get all the elements with the .animate class applied
// 	const obj3d = document.querySelectorAll('canvas');

// 	// Add the observer to each of those elements
// 	obj3d.forEach((element) => observer.observe(element));

// });