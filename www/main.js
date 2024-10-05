document.addEventListener("DOMContentLoaded", () => {

	// Use Intersection Observer to determine if objects are within the viewport
	const observer = new IntersectionObserver(entries => {
	  entries.forEach(entry => {
		if (entry.isIntersecting) {
		  entry.target.classList.add('anima');
		  return;
		}
		entry.target.classList.remove('anima');
	  });
	});

	// Get all the elements with the .animate class applied
	const allAnimatedElements = document.querySelectorAll('.animado');

	// Add the observer to each of those elements
	allAnimatedElements.forEach((element) => observer.observe(element));

});