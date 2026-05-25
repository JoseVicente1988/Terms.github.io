const cursorGlow = document.querySelector(".cursor-glow");
const reveals = document.querySelectorAll(".reveal");
const gameTabs = document.querySelectorAll(".game-tab");

const games = {
	laser: {
		title: "Laser Mirror Puzzle",
		genre: "Puzzle · Logic · Beta",
		description: "Rotate mirrors, redirect laser beams and find the correct route to complete each level.",
		icon: "https://play-lh.googleusercontent.com/yQySyCnis-KyZTVJMyufh77u9h9bN7KaXSWyweacwN7jy5VwGs_YK_ooF5tl-D0qNmTYKsL-tqhNGzgUgcr3vUo=s256",
		link: "https://play.google.com/store/apps/details?id=com.ASerraPlay.lasermirror",
		features: ["Mirror routing", "Laser puzzles", "Short levels"]
	},
	bible: {
		title: "Bible Quizz",
		genre: "Trivia · Quiz",
		description: "A Bible-themed quiz game where players answer questions and test their knowledge.",
		icon: "https://play-lh.googleusercontent.com/8DmC3WQOvi0omWAX_V3aAlQJLsZTV8gu2kR1A9wtyAd9uMGAxjlXt8NqHxiJWxFTuOM=s256",
		link: "https://play.google.com/store/apps/details?id=com.ASerraPlay.BibleQuizz",
		features: ["Trivia", "Questions", "Knowledge"]
	},
	run: {
		title: "RunRunRule",
		genre: "Arcade · Endless",
		description: "A fast arcade game designed for short mobile sessions and direct action.",
		icon: "https://play-lh.googleusercontent.com/ning4Homll1jps-1wHqouR8YaxKLoKPQzPh86eDR9NspYvNKkcCckux7GwgStFdjnOg=s256",
		link: "https://play.google.com/store/apps/details?id=com.ASerraPlay.RunRunRule",
		features: ["Arcade", "Endless", "Quick play"]
	}
};

window.addEventListener("mousemove", function (event) {
	if (cursorGlow === null) {
		return;
	}

	cursorGlow.style.left = event.clientX + "px";
	cursorGlow.style.top = event.clientY + "px";
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

gameTabs.forEach(function (tab) {
	tab.addEventListener("click", function () {
		const key = tab.dataset.game;
		const game = games[key];

		if (!game) {
			return;
		}

		gameTabs.forEach(function (item) {
			item.classList.remove("active");
		});

		tab.classList.add("active");

		document.getElementById("displayTitle").textContent = game.title;
		document.getElementById("displayGenre").textContent = game.genre;
		document.getElementById("displayDescription").textContent = game.description;
		document.getElementById("displayIcon").src = game.icon;
		document.getElementById("displayIcon").alt = game.title + " icon";
		document.getElementById("displayLink").href = game.link;

		const features = document.getElementById("displayFeatures");
		features.innerHTML = "";

		game.features.forEach(function (feature) {
			const span = document.createElement("span");
			span.textContent = feature;
			features.appendChild(span);
		});
	});
});
