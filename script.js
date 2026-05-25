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

const cards = document.querySelectorAll(".game-card, .showcase-panel, .studio-item");

cards.forEach(function (card) {
	card.addEventListener("mousemove", function (event) {
		const rect = card.getBoundingClientRect();
		const x = event.clientX - rect.left;
		const y = event.clientY - rect.top;
		const rx = ((y / rect.height) - 0.5) * -4;
		const ry = ((x / rect.width) - 0.5) * 4;

		card.style.transform = "perspective(900px) rotateX(" + rx + "deg) rotateY(" + ry + "deg)";
	});

	card.addEventListener("mouseleave", function () {
		card.style.transform = "";
	});
});
