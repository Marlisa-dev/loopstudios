let menuBg = document.getElementById('bg-change');
let navMenu = document.getElementById('nav-menu');
let toggleBtn = document.getElementById('toggle-icon');
let heroContent = document.getElementById('hero-content');

function showNav() {
	toggleBtn.addEventListener('click', () => {
		navMenu.classList.toggle('active')
    menuBg.classList.toggle('change')
		heroContent.classList.toggle('hide') 
		changeMenuBtn();    
	})
}
showNav();

let menuBtn = document.getElementById('toggle-img')

function changeMenuBtn() {
	if(menuBtn.getAttribute('src')==="./images/icon-close.svg"){
		menuBtn.setAttribute('src', './images/icon-hamburger.svg');
	}
	else{menuBtn.setAttribute('src', './images/icon-close.svg');
	}
}