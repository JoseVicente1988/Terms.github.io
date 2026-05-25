const revealItems = document.querySelectorAll(".reveal");
const tabs = document.querySelectorAll(".game-tab");
const languageButtons = document.querySelectorAll(".language-button");
const sectionWatchers = document.querySelectorAll(".section-watch");

const translations = {
	en: {
		nav_games: "Games",
		nav_about: "About",
		nav_contact: "Contact",
		nav_privacy: "Privacy",
		hero_eyebrow: "Solo indie developer · Android games",
		hero_title: "Building small mobile games, one release at a time.",
		hero_lead: "ASerraPlay is my personal publishing name for Android games: puzzle, trivia and arcade projects made by a solo developer.",
		hero_button_games: "See my games",
		hero_button_play: "Google Play",
		developer_label: "Developer",
		developer_name: "Jose Vicente Vicedo Silla",
		developer_role: "Solo developer behind ASerraPlay.",
		meta_focus_label: "Focus",
		meta_focus_value: "Mobile games",
		meta_platform_label: "Platform",
		meta_platform_value: "Google Play",
		meta_brand_label: "Brand",
		games_eyebrow: "Games",
		games_title: "Published work",
		games_intro: "Choose a game to see a short description and open it directly on Google Play.",
		game_open: "Open on Google Play",
		about_eyebrow: "About",
		about_title: "Not a studio. A solo dev publishing finished games.",
		about_p1: "ASerraPlay is the name I use to organize and publish my Android game projects. The focus is simple: finish games, publish them, learn from each release and keep improving.",
		value_1_title: "Finished releases",
		value_1_text: "Small completed projects matter more than endless unfinished prototypes.",
		value_2_title: "Clear mechanics",
		value_2_text: "Simple ideas, readable goals and quick-session gameplay.",
		value_3_title: "Mobile publishing",
		value_3_text: "Built and maintained with Google Play requirements in mind.",
		contact_eyebrow: "Contact",
		contact_title: "Feedback, support or collaboration?",
		contact_text: "Contact me directly for anything related to ASerraPlay games.",
		contact_email: "Email me",
		contact_play: "Google Play page",
		footer_text: "© 2026 ASerraPlay",
		footer_privacy: "Privacy Policy",
		footer_contact: "Contact"
	},
	es: {
		nav_games: "Juegos",
		nav_about: "Sobre mí",
		nav_contact: "Contacto",
		nav_privacy: "Privacidad",
		hero_eyebrow: "Desarrollador indie · Juegos Android",
		hero_title: "Creando pequeños juegos móviles, una publicación cada vez.",
		hero_lead: "ASerraPlay es mi nombre de publicación para juegos Android: proyectos de puzles, trivia y arcade hechos por un desarrollador en solitario.",
		hero_button_games: "Ver mis juegos",
		hero_button_play: "Google Play",
		developer_label: "Desarrollador",
		developer_name: "Jose Vicente Vicedo Silla",
		developer_role: "Desarrollador en solitario detrás de ASerraPlay.",
		meta_focus_label: "Enfoque",
		meta_focus_value: "Juegos móviles",
		meta_platform_label: "Plataforma",
		meta_platform_value: "Google Play",
		meta_brand_label: "Marca",
		games_eyebrow: "Juegos",
		games_title: "Proyectos publicados",
		games_intro: "Elige un juego para ver una descripción breve y abrirlo directamente en Google Play.",
		game_open: "Abrir en Google Play",
		about_eyebrow: "Sobre mí",
		about_title: "No es un estudio. Soy un dev en solitario publicando juegos terminados.",
		about_p1: "ASerraPlay es el nombre que uso para organizar y publicar mis proyectos de juegos Android. El objetivo es simple: terminar juegos, publicarlos, aprender de cada lanzamiento y seguir mejorando.",
		value_1_title: "Lanzamientos terminados",
		value_1_text: "Los proyectos pequeños y terminados valen más que prototipos infinitos sin publicar.",
		value_2_title: "Mecánicas claras",
		value_2_text: "Ideas simples, objetivos legibles y partidas rápidas.",
		value_3_title: "Publicación móvil",
		value_3_text: "Creado y mantenido teniendo en cuenta los requisitos de Google Play.",
		contact_eyebrow: "Contacto",
		contact_title: "¿Feedback, soporte o colaboración?",
		contact_text: "Contacta conmigo directamente para cualquier cosa relacionada con los juegos de ASerraPlay.",
		contact_email: "Escríbeme",
		contact_play: "Página de Google Play",
		footer_text: "© 2026 ASerraPlay",
		footer_privacy: "Política de privacidad",
		footer_contact: "Contacto"
	}
};

const gameData = {
	en: {
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
	},
	es: {
		laser: {
			icon: "https://play-lh.googleusercontent.com/yQySyCnis-KyZTVJMyufh77u9h9bN7KaXSWyweacwN7jy5VwGs_YK_ooF5tl-D0qNmTYKsL-tqhNGzgUgcr3vUo=s256",
			title: "Laser Mirror Puzzle",
			genre: "Puzle · Lógica · Beta",
			description: "Gira espejos, redirige rayos láser y resuelve cada nivel encontrando el camino correcto.",
			link: "https://play.google.com/store/apps/details?id=com.ASerraPlay.lasermirror"
		},
		bible: {
			icon: "https://play-lh.googleusercontent.com/8DmC3WQOvi0omWAX_V3aAlQJLsZTV8gu2kR1A9wtyAd9uMGAxjlXt8NqHxiJWxFTuOM=s256",
			title: "Bible Quizz",
			genre: "Trivia · Quiz",
			description: "Un juego de preguntas bíblicas donde los jugadores responden y ponen a prueba sus conocimientos.",
			link: "https://play.google.com/store/apps/details?id=com.ASerraPlay.BibleQuizz"
		},
		run: {
			icon: "https://play-lh.googleusercontent.com/ning4Homll1jps-1wHqouR8YaxKLoKPQzPh86eDR9NspYvNKkcCckux7GwgStFdjnOg=s256",
			title: "RunRunRule",
			genre: "Arcade · Endless",
			description: "Un juego arcade rápido pensado para partidas cortas en móvil y acción directa.",
			link: "https://play.google.com/store/apps/details?id=com.ASerraPlay.RunRunRule"
		}
	}
};

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
	const data = gameData[currentLanguage][key];

	if (!data) {
		return;
	}

	currentGame = key;

	tabs.forEach(function (item) {
		item.classList.toggle("active", item.dataset.game === key);
	});

	document.getElementById("gameIcon").src = data.icon;
	document.getElementById("gameIcon").alt = data.title + " icon";
	document.getElementById("gameTitle").textContent = data.title;
	document.getElementById("gameGenre").textContent = data.genre;
	document.getElementById("gameDescription").textContent = data.description;
	document.getElementById("gameLink").href = data.link;
}

const revealObserver = new IntersectionObserver(
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
	revealObserver.observe(item);
});

const sectionObserver = new IntersectionObserver(
	function (entries) {
		entries.forEach(function (entry) {
			if (entry.isIntersecting) {
				document.body.dataset.section = entry.target.dataset.bgSection || "home";
			}
		});
	},
	{
		threshold: 0.38
	}
);

sectionWatchers.forEach(function (section) {
	sectionObserver.observe(section);
});

tabs.forEach(function (tab) {
	tab.addEventListener("click", function () {
		updateGame(tab.dataset.game);
	});
});

languageButtons.forEach(function (button) {
	button.addEventListener("click", function () {
		setLanguage(button.dataset.lang);
	});
});

setLanguage(currentLanguage);
updateGame(currentGame);
