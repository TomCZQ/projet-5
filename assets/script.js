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
let dots = document.querySelector('.dots')
let i = 0

console.log(dotsCarousel);

// @numeroSlide=nombre chiffre entre 0 et 3
function changementSlide(){
	photoSlide.setAttribute("src", "./assets/images/slideshow/"+slides[i].image);
	textBanner.innerHTML=slides[i].tagLine;
}
arrowRightCarousel.addEventListener("click", (event) => {
	if(i === slides.length-1) {
		i = 0;
		
	}else{
		i++;
	}
	changementSlide();	
	createBulletPoint();
})

arrowLeftCarousel.addEventListener("click", (event) => {
	if(i === 0) {
		i = slides.length-1;
	}else{
		i--;
	}
	changementSlide();
	createBulletPoint();	
})


const createBulletPoint=() => {
	dots.innerHTML= ''
	for(let index=0; index<slides.length; index++){
		const dot = document.createElement('div')
		if(index === i){
			dot.className='dot dot_selected'
		}else{
			dot.className='dot'
		}

		dots.appendChild(dot)	
	}
}

createBulletPoint();
