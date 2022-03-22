const video =  document.getElementById("myVideo");
const btn = document.getElementById("myBtn")

btn.addEventListener('click', myFunction);

function myFunction() {
    if(video.paused) {
        video.play();
        btn.innerHTML = "Pause";
    } else {
        video.pause();
        btn.innerHTML = "Play";
    }
}