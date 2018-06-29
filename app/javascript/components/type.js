import Typed from 'typed.js';

// function loadDynamicBannerText = () => {
const typeJsBanner = () => {
	console.log("helloooooooooo");
	var options = {
	  strings: ["", 
	  	"^1000 Web Development is the closest thing to  ^2000 magic", 
	  	"Clients have ^1500 awesome ideas in their minds", 
	  	"I use my ^1500 super coding skills to implement them", 
	  	"" ],
	  typeSpeed: 45,
	  smartBackspace: true
	}

	var typed = new Typed(".dynamic-text", options);
}

const showCurriculum = () => {
	const phrase3 = document.querySelector(".phrase-3");
	setTimeout(() => {
		phrase3.classList.remove("hide");
	}, 20000);
	
}

export { typeJsBanner, showCurriculum };