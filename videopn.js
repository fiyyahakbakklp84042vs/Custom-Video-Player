var vid = document.getElementById('myVideo');
var fillBar = document.getElementById("fill");
var currentTime = document.getElementById("currentTime");
var volumeSlider = document.getElementById("volume");
var s = 1;
function playOrPause() {
	if (vid.paused) {
		vid.play();
		$("#playBtn").attr("src","Custom-Video-Player-master/pause.png");
	} else {
		vid.pause();
		$("#playBtn").attr("src","Custom-Video-Player-master/play.png");
	}
}
vid.addEventListener('timeupdate', function(){
	var position = vid.currentTime / vid.duration;
	fillBar.style.width = position * 100 + '%';
	converTime(Math.round(vid.currentTime));
	if (vid.ended) {
		next();
	}
});
function converTime(seconds){
	var min = Math.floor(seconds / 60);
	var sec = seconds % 60;
	min = (min < 10) ? "0" + min : min;
	sec = (sec < 10) ? "0" + sec : sec;
	currentTime.textContent = min + ":" + sec;
	totalTime(Math.round(vid.duration));
}
function totalTime(seconds){
	var min = Math.floor(seconds / 60);
	var sec = seconds % 60;
	min = (min < 10) ? "0" + min : min;
	sec = (sec < 10) ? "0" + sec : sec;
	currentTime.textContent += " / " + min + ":" + sec; 
}
function changeVolume(){
	vid.volume = volumeSlider.value;
	if (volumeSlider.value == 0) {
		$("#speaker").attr("src","Custom-Video-Player-master/Mute.png");
	} else {
		$("#speaker").attr("src","Custom-Video-Player-master/Speaker.png")
	}
}
function next(){
	s++;
	if (s == 4) {
		s = 1;
	};
	charge();
}
function previous(){
	s--;
	if (s == 0) {
		s = 3;
	};
	charge();
}
function charge(){
	switch(s){
		case 1:
		vid.src = "9 WAR OF UNITY.mp4";
		vid.poster = "vlcsnap-2020-03-17-17h52m24s394.png";
		playOrPause();
		break;
		case 2:
		vid.src = "KICKO & SUPER SPEEDO VS CAR QUEEN FULL EPISODE IN HINDI.mp4";
		vid.poster = "vlcsnap-2020-03-17-17h52m24s394.png";
		playOrPause();
		break;
		case 3:
		vid.src = "KICKO & SUPER SPEEDO AND HAWAI TOLL NEW EPISODE IN HINDI.mp4";
		vid.poster = "vlcsnap-2020-03-17-17h52m24s394.png";
		playOrPause();
		break;
	}
}
