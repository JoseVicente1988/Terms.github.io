const background = document.querySelector(".background");
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", function () {
	if (background === null) {
		return;
	}

	const y = Math.min(window.scrollY * 0.06, 120);
	background.style.transform = "scale(1.04) translateY(" + y + "px)";
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
