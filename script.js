const revealItems = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
	function (entries) {
		entries.forEach(function (entry) {
			if (entry.isIntersecting) {
				entry.target.classList.add("visible");
			}
		});
	},
	{
		threshold: 0.14
	}
);

revealItems.forEach(function (item) {
	observer.observe(item);
});
