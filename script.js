const cursorLight = document.querySelector(".cursor-light");
const reveals = document.querySelectorAll(".reveal");
const background = document.querySelector(".site-background");

window.addEventListener("mousemove", function (event) {
	if (cursorLight === null) {
		return;
	}

	cursorLight.style.left = event.clientX + "px";
	cursorLight.style.top = event.clientY + "px";
});

window.addEventListener("scroll", function () {
	if (background === null) {
		return;
	}

	const scrollY = window.scrollY;
	const movement = Math.min(scrollY * 0.08, 90);
	background.style.transform = "scale(1.04) translateY(" + movement + "px)";
});

const observer = new IntersectionObserver(
	function (entries) {
		entries.forEach(function (entry) {
			if (entry.isIntersecting) {
				entry.target.classList.add("visible");
			}
		});
	},
	{
		threshold: 0.16
	}
);

reveals.forEach(function (element) {
	observer.observe(element);
});
