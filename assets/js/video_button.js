// Video Play Button Function

const playButton = document.getElementById("videoButton");
const video = document.getElementById("welcomeVid")

playButton.addEventListener('click', function playVideo(){ 
	playButton.style.display = 'none';
	video.play();

})

video.addEventListener('click', function pauseVideo() {
	video.pause();
	playButton.style.display = 'block';

})