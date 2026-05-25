const glow = document.querySelector(".cursor-glow");
const revealItems = document.querySelectorAll(".reveal, .reveal-delay");

window.addEventListener("mousemove", function (event) {
	if (!glow) {
		return;
	}

	glow.style.left = event.clientX + "px";
	glow.style.top = event.clientY + "px";
});

const observer = new IntersectionObserver(
	function (entries) {
		entries.forEach(function (entry) {
			if (entry.isIntersecting) {
				entry.target.classList.add("is-visible");
			}
		});
	},
	{
		threshold: 0.15
	}
);

revealItems.forEach(function (item) {
	observer.observe(item);
});
