const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span> en boutique et en ligne </span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events </span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span> de CMJN aux pantones </span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span >avec découpe laser sur mesure </span>"
	}
]

let arrowLeftCarousel = document.getElementById("arrow_left");
let arrowRightCarousel = document.getElementById("arrow_right");
let dotsCarousel = document.querySelectorAll(".dots .dot");
let photoSlide = document.querySelector("#banner .banner-img");
let textBanner = document.querySelector("#banner p");

let i = 0

console.log(dotsCarousel);

// @numeroSlide=nombre chiffre entre 0 et 3
function changementSlide(numeroSlide){
	photoSlide.setAttribute("src", "./assets/images/slideshow/"+slides[numeroSlide].image);
	textBanner.innerHTML=slides[numeroSlide].tagLine;
}

function addBullet(numeroSlide){
	let selectedDot = dotsCarousel[numeroSlide];
	selectedDot.classList.add("dot_selected");
}

function removeBullet(numeroSlide){
	let selectedDot = dotsCarousel[numeroSlide];
	selectedDot.classList.remove("dot_selected");
}


arrowRightCarousel.addEventListener("click", (event) => {
	removeBullet(i)
	if(i === 3) {
		i = 0;
		
	}else{
		i++;
	}
	changementSlide(i);	
	addBullet(i);
})

arrowLeftCarousel.addEventListener("click", (event) => {
	removeBullet(i)
	if(i === 0) {
		i = 3;
	}else{
		i--;
	}
	changementSlide(i);
	addBullet(i);	
})

