// #snd 접근법
// $("#snd") -> jQuery
// document.getElementById("snd") -> ES5
// document.querySelector("#snd") -> ES6
//console.log($("#snd")[0]);
//console.log(document.querySelector("#snd"));

// 1번 hasClass 사용
/*
$("#bt_play").click(function(){
	if($(this).hasClass("fa-play-circle")) {
		$("#snd")[0].play();
		$(this).removeClass("fa-play-circle").addClass("fa-pause-circle");
	}
	else {
		$("#snd")[0].pause();
		$(this).removeClass("fa-pause-circle").addClass("fa-play-circle");
	}
});
*/
// 2번 played 속성 사용
/*
$("#bt_play").click(function(){
	if($("#snd")[0].paused) {
		$("#snd")[0].play();
		$(this).removeClass("fa-play-circle").addClass("fa-pause-circle");
	}
	else {
		$("#snd")[0].pause();
		$(this).removeClass("fa-pause-circle").addClass("fa-play-circle");
	}
});
*/
// 3번 순수 자바스크립트
var snd = document.querySelector("#snd");
var btPlay = document.querySelector("#bt_play");
btPlay.addEventListener("click", soundPlay);

function soundPlay(){
	if(snd.paused) {
		snd.play();
		this.classList.toggle("fa-play-circle", false);
		this.classList.toggle("fa-pause-circle", true);
	}
	else {
		snd.pause();
		this.classList.toggle("fa-play-circle", true);
		this.classList.toggle("fa-pause-circle", false);
	}
}

