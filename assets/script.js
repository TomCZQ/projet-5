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
function changementSlide(){
	photoSlide.setAttribute("src", "./assets/images/slideshow/"+slides[i].image);
	textBanner.innerHTML=slides[i].tagLine;
}

function addBullet(){
	let selectedDot = dotsCarousel[i];
	selectedDot.classList.add("dot_selected");
}

function removeBullet(){
	let selectedDot = dotsCarousel[i];
	selectedDot.classList.remove("dot_selected");
}


arrowRightCarousel.addEventListener("click", (event) => {
	removeBullet(i);
	if(i === slides.length-1) {
		i = 0;
		
	}else{
		i++;
	}
	changementSlide(i);	
	addBullet();
})

arrowLeftCarousel.addEventListener("click", (event) => {
	removeBullet(i);
	if(i === 0) {
		i = slides.length-1;
	}else{
		i--;
	}
	changementSlide(i);
	addBullet();	
})

