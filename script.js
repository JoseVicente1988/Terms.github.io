const revealItems = document.querySelectorAll(".reveal");
const tabs = document.querySelectorAll(".game-tab");

const gameData = {
	laser: {
		icon: "https://play-lh.googleusercontent.com/yQySyCnis-KyZTVJMyufh77u9h9bN7KaXSWyweacwN7jy5VwGs_YK_ooF5tl-D0qNmTYKsL-tqhNGzgUgcr3vUo=s256",
		title: "Laser Mirror Puzzle",
		genre: "Puzzle · Logic · Beta",
		description: "Rotate mirrors, redirect laser beams and solve each level by finding the correct path.",
		link: "https://play.google.com/store/apps/details?id=com.ASerraPlay.lasermirror"
	},
	bible: {
		icon: "https://play-lh.googleusercontent.com/8DmC3WQOvi0omWAX_V3aAlQJLsZTV8gu2kR1A9wtyAd9uMGAxjlXt8NqHxiJWxFTuOM=s256",
		title: "Bible Quizz",
		genre: "Trivia · Quiz",
		description: "A Bible-themed quiz game where players answer questions and test their knowledge.",
		link: "https://play.google.com/store/apps/details?id=com.ASerraPlay.BibleQuizz"
	},
	run: {
		icon: "https://play-lh.googleusercontent.com/ning4Homll1jps-1wHqouR8YaxKLoKPQzPh86eDR9NspYvNKkcCckux7GwgStFdjnOg=s256",
		title: "RunRunRule",
		genre: "Arcade · Endless",
		description: "A fast arcade game made for quick mobile sessions and direct action.",
		link: "https://play.google.com/store/apps/details?id=com.ASerraPlay.RunRunRule"
	}
};

const observer = new IntersectionObserver(
	function (entries) {
		entries.forEach(function (entry) {
			if (entry.isIntersecting) {
				entry.target.classList.add("visible");
			}
		});
	},
	{ threshold: 0.14 }
);

revealItems.forEach(function (item) {
	observer.observe(item);
});

tabs.forEach(function (tab) {
	tab.addEventListener("click", function () {
		const key = tab.dataset.game;
		const data = gameData[key];

		if (!data) {
			return;
		}

		tabs.forEach(function (item) {
			item.classList.remove("active");
		});

		tab.classList.add("active");

		document.getElementById("gameIcon").src = data.icon;
		document.getElementById("gameIcon").alt = data.title + " icon";
		document.getElementById("gameTitle").textContent = data.title;
		document.getElementById("gameGenre").textContent = data.genre;
		document.getElementById("gameDescription").textContent = data.description;
		document.getElementById("gameLink").href = data.link;
	});
});
