const translations = {
	en: {
		rail_word: "CREATE · PLAY · INSPIRE",
		nav_games: "Games",
		nav_about: "About",
		nav_contact: "Contact",
		nav_privacy: "Privacy",

		home_kicker: "Solo indie game developer",
		home_title: "I create mobile games with clear ideas.",
		home_text: "ASerraPlay is my personal brand as an indie developer, where I publish Android games focused on clear ideas, direct mechanics and easy-to-enjoy experiences.",
		home_cta: "Explore my work",
		chapter_home: "Home",

		games_kicker: "Released games",
		games_title: "Choose a project.",
		chapter_games: "Games",
		game_open: "Open on Google Play",

		about_kicker: "Behind ASerraPlay",
		about_title: "A solo indie developer building a personal game catalogue.",
		about_text: "ASerraPlay is my personal brand as an indie developer. It brings together my Android games and represents a focused path of publishing, learning and improving with each release.",
		principle_1_title: "Finish",
		principle_1_text: "Small completed releases over endless prototypes.",
		principle_2_title: "Learn",
		principle_2_text: "Every launch teaches something useful for the next one.",
		principle_3_title: "Improve",
		principle_3_text: "Better gameplay, better presentation, better releases.",
		chapter_about: "About",

		contact_kicker: "Contact",
		contact_title: "Feedback, support or collaboration?",
		contact_text: "If you want to talk about my games, report an issue or contact me professionally, you can reach me directly.",
		contact_email: "Email me",
		contact_play: "Google Play page",
		chapter_contact: "Contact"
	},
	es: {
		rail_word: "CREAR · JUGAR · INSPIRAR",
		nav_games: "Juegos",
		nav_about: "Sobre mí",
		nav_contact: "Contacto",
		nav_privacy: "Privacidad",

		home_kicker: "Desarrollador indie en solitario",
		home_title: "Creo juegos móviles con ideas claras.",
		home_text: "ASerraPlay es mi marca personal como desarrollador indie, donde publico juegos Android centrados en ideas claras, mecánicas directas y experiencias fáciles de disfrutar.",
		home_cta: "Ver mi trabajo",
		chapter_home: "Inicio",

		games_kicker: "Juegos publicados",
		games_title: "Elige un proyecto.",
		chapter_games: "Juegos",
		game_open: "Abrir en Google Play",

		about_kicker: "Detrás de ASerraPlay",
		about_title: "Un desarrollador indie creando un catálogo propio de juegos.",
		about_text: "ASerraPlay es mi marca personal como desarrollador indie. Reúne mis juegos Android y representa un camino enfocado en publicar, aprender y mejorar con cada lanzamiento.",
		principle_1_title: "Terminar",
		principle_1_text: "Lanzamientos pequeños y completos por encima de prototipos infinitos.",
		principle_2_title: "Aprender",
		principle_2_text: "Cada lanzamiento enseña algo útil para el siguiente.",
		principle_3_title: "Mejorar",
		principle_3_text: "Mejor gameplay, mejor presentación y mejores lanzamientos.",
		chapter_about: "Sobre mí",

		contact_kicker: "Contacto",
		contact_title: "¿Feedback, soporte o colaboración?",
		contact_text: "Si quieres hablar sobre mis juegos, reportar un problema o contactar profesionalmente, puedes escribirme directamente.",
		contact_email: "Escríbeme",
		contact_play: "Página de Google Play",
		chapter_contact: "Contacto"
	}
};

const games = {
	en: {
		laser: {
			title: "Laser Mirror Puzzle",
			genre: "Puzzle · Logic · Beta",
			description: "Rotate mirrors, redirect laser beams and solve each level by finding the correct path.",
			link: "https://play.google.com/store/apps/details?id=com.ASerraPlay.lasermirror"
		},
		bible: {
			title: "Bible Quizz",
			genre: "Trivia · Quiz",
			description: "A Bible-themed quiz game where players answer questions and test their knowledge.",
			link: "https://play.google.com/store/apps/details?id=com.ASerraPlay.BibleQuizz"
		},
		run: {
			title: "RunRunRule",
			genre: "Arcade · Endless",
			description: "A fast arcade game made for quick mobile sessions and direct action.",
			link: "https://play.google.com/store/apps/details?id=com.ASerraPlay.RunRunRule"
		}
	},
	es: {
		laser: {
			title: "Laser Mirror Puzzle",
			genre: "Puzle · Lógica · Beta",
			description: "Gira espejos, redirige rayos láser y resuelve cada nivel encontrando el camino correcto.",
			link: "https://play.google.com/store/apps/details?id=com.ASerraPlay.lasermirror"
		},
		bible: {
			title: "Bible Quizz",
			genre: "Trivia · Quiz",
			description: "Un juego de preguntas bíblicas donde los jugadores responden y ponen a prueba sus conocimientos.",
			link: "https://play.google.com/store/apps/details?id=com.ASerraPlay.BibleQuizz"
		},
		run: {
			title: "RunRunRule",
			genre: "Arcade · Endless",
			description: "Un juego arcade rápido pensado para partidas cortas en móvil y acción directa.",
			link: "https://play.google.com/store/apps/details?id=com.ASerraPlay.RunRunRule"
		}
	}
};

const sectionWatchers = document.querySelectorAll(".section-watch");
const railDots = document.querySelectorAll(".rail-dot");
const languageButtons = document.querySelectorAll(".language-button");
const gameCards = document.querySelectorAll(".game-card");

let currentLanguage = localStorage.getItem("aserraplay-language") || "en";
let currentGame = "laser";

function setLanguage(language) {
	if (!translations[language]) {
		return;
	}

	currentLanguage = language;
	localStorage.setItem("aserraplay-language", language);
	document.documentElement.lang = language;

	document.querySelectorAll("[data-i18n]").forEach(function (element) {
		const key = element.dataset.i18n;
		const value = translations[language][key];

		if (value) {
			element.textContent = value;
		}
	});

	languageButtons.forEach(function (button) {
		button.classList.toggle("active", button.dataset.lang === language);
	});

	updateGame(currentGame);
}

function updateGame(key) {
	const game = games[currentLanguage][key];

	if (!game) {
		return;
	}

	currentGame = key;

	gameCards.forEach(function (card) {
		card.classList.toggle("active", card.dataset.game === key);
	});

	document.getElementById("gameGenre").textContent = game.genre;
	document.getElementById("gameTitle").textContent = game.title;
	document.getElementById("gameDescription").textContent = game.description;
	document.getElementById("gameLink").href = game.link;
}

const sectionObserver = new IntersectionObserver(
	function (entries) {
		entries.forEach(function (entry) {
			if (entry.isIntersecting) {
				const section = entry.target.dataset.section || "home";
				document.body.dataset.section = section;

				railDots.forEach(function (dot) {
					dot.classList.toggle("active", dot.dataset.sectionLink === section);
				});
			}
		});
	},
	{
		threshold: 0.52
	}
);

sectionWatchers.forEach(function (section) {
	sectionObserver.observe(section);
});

languageButtons.forEach(function (button) {
	button.addEventListener("click", function () {
		setLanguage(button.dataset.lang);
	});
});

gameCards.forEach(function (card) {
	card.addEventListener("click", function () {
		updateGame(card.dataset.game);
	});
});

window.addEventListener("mousemove", function (event) {
	const image = document.querySelector(".background-image");

	if (!image) {
		return;
	}

	const x = (event.clientX / window.innerWidth - 0.5) * 18;
	const y = (event.clientY / window.innerHeight - 0.5) * 12;
	image.style.transform = "scale(1.035) translate3d(" + x + "px, " + y + "px, 0)";
});

setLanguage(currentLanguage);
updateGame(currentGame);
