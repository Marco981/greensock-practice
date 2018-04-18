window.onload = function() {
	let firstScreen = document.querySelector(".first"),
			firstScreenText = document.querySelectorAll(".first h1"),
			textDiv = document.querySelector(".text-div"),
			logo = document.querySelector(".logo"),
			titleDiv = document.querySelector(".title-div"),
			pointsDiv = document.querySelector(".points"),
			button = document.querySelector(".button"),
			tl = new TimelineLite();
		function buttonAnimation() {
			button.setTimeout
		}
		tl
			.staggerFrom(firstScreenText,.7,{scale:0,autoAlpha:0,ease: Bounce.easeOut,},.7)
			.to([firstScreen,firstScreenText], 1.5, {autoAlpha:0},"+=.2")
			.from(textDiv, .5, {autoAlpha:0,x:-200})
			.from(titleDiv, 1, {opacity:0})
			.from(pointsDiv, 1, {autoAlpha:0,scale:0,ease: Elastic.easeOut.config(1, .75)})
			.from([logo,button], 1, {opacity:0})
			.to(button,1,{ease: Back.easeOut.config(1.7)},1)
}