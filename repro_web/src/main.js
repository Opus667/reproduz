import { Application } from '@splinetool/runtime';

export const dstqs = ["homage","signs","tags","sticker","trophy","laser","cnc","uv"];
let i = 0;
export const spliner  =[0];
export const canvas  =[0];


document.addEventListener("DOMContentLoaded", () => {

	const observer = new IntersectionObserver(entries => {
	  entries.forEach(entry => {
		if (entry.isIntersecting) {
            spliner[i] = new Application(entry.target).load(`3d/${dstqs[i]}.splinecode`)
            i++   
            return;          
		  return;
		}
	  });
	});

	// Get all the elements with the .animate class applied
	const obj3d = document.querySelectorAll('canvas');

	// Add the observer to each of those elements
	obj3d.forEach((element) => observer.observe(element));

});