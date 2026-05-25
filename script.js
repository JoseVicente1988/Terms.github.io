const glow = document.querySelector(".cursor-glow");
const revealElements = document.querySelectorAll(".reveal");

window.addEventListener("mousemove", function (event) {
	if (glow === null) {
		return;
	}

	glow.style.left = event.clientX + "px";
	glow.style.top = event.clientY + "px";
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
		threshold: 0.18
	}
);

revealElements.forEach(function (element) {
	observer.observe(element);
});
