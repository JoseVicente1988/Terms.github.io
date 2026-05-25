const cursorGlow = document.querySelector(".cursor-glow");
const bgImage = document.querySelector(".bg-image");
const revealItems = document.querySelectorAll(".reveal");
const switchButtons = document.querySelectorAll(".switch-button");
const featureCards = document.querySelectorAll(".featured-card");
const magneticItems = document.querySelectorAll(".magnetic");
const magneticCards = document.querySelectorAll(".magnetic-card");

window.addEventListener("mousemove", function (event) {
	if (cursorGlow) {
		cursorGlow.style.left = event.clientX + "px";
		cursorGlow.style.top = event.clientY + "px";
	}

	if (bgImage) {
		const x = (event.clientX / window.innerWidth - 0.5) * 18;
		const y = (event.clientY / window.innerHeight - 0.5) * 14;
		bgImage.style.transform = "translate3d(" + x + "px, " + y + "px, 0)";
	}
});

window.addEventListener("scroll", function () {
	if (!bgImage) {
		return;
	}

	const y = Math.min(window.scrollY * 0.035, 70);
	bgImage.style.backgroundPosition = "center calc(var(--bg-position-y) + " + y + "px)";
});

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

switchButtons.forEach(function (button) {
	button.addEventListener("click", function () {
		const game = button.dataset.game;

		switchButtons.forEach(function (item) {
			item.classList.remove("active");
		});

		featureCards.forEach(function (card) {
			card.classList.remove("active");
		});

		button.classList.add("active");

		const activeCard = document.querySelector('[data-feature-card="' + game + '"]');
		if (activeCard) {
			activeCard.classList.add("active");
		}
	});
});

magneticItems.forEach(function (item) {
	item.addEventListener("mousemove", function (event) {
		const rect = item.getBoundingClientRect();
		const x = event.clientX - rect.left - rect.width / 2;
		const y = event.clientY - rect.top - rect.height / 2;

		item.style.transform = "translate(" + x * 0.08 + "px, " + y * 0.12 + "px)";
	});

	item.addEventListener("mouseleave", function () {
		item.style.transform = "";
	});
});

magneticCards.forEach(function (card) {
	card.addEventListener("mousemove", function (event) {
		const rect = card.getBoundingClientRect();
		const x = event.clientX - rect.left;
		const y = event.clientY - rect.top;
		const rotateY = ((x / rect.width) - 0.5) * 8;
		const rotateX = ((y / rect.height) - 0.5) * -8;

		card.style.transform = "perspective(900px) rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg) translateY(-6px)";
	});

	card.addEventListener("mouseleave", function () {
		card.style.transform = "";
	});
});

const canvas = document.getElementById("particles");
const context = canvas.getContext("2d");
let particles = [];

function resizeCanvas() {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
}

function createParticles() {
	particles = [];
	const count = Math.min(90, Math.floor(window.innerWidth / 18));

	for (let index = 0; index < count; index += 1) {
		particles.push({
			x: Math.random() * canvas.width,
			y: Math.random() * canvas.height,
			vx: (Math.random() - 0.5) * 0.28,
			vy: (Math.random() - 0.5) * 0.28,
			radius: Math.random() * 1.8 + 0.6,
			alpha: Math.random() * 0.45 + 0.12
		});
	}
}

function drawParticles() {
	context.clearRect(0, 0, canvas.width, canvas.height);

	particles.forEach(function (particle) {
		particle.x += particle.vx;
		particle.y += particle.vy;

		if (particle.x < 0 || particle.x > canvas.width) {
			particle.vx *= -1;
		}

		if (particle.y < 0 || particle.y > canvas.height) {
			particle.vy *= -1;
		}

		context.beginPath();
		context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
		context.fillStyle = "rgba(105, 231, 255, " + particle.alpha + ")";
		context.fill();
	});

	requestAnimationFrame(drawParticles);
}

window.addEventListener("resize", function () {
	resizeCanvas();
	createParticles();
});

resizeCanvas();
createParticles();
drawParticles();
