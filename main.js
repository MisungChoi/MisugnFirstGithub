const video =  document.getElementById("myVideo");
const audio = document.getElementById("myAudio");
const btn = document.getElementById("myBtn");

btn.addEventListener('click', myFunction);

function myFunction() {
    if(video.paused) {
        video.play();
        audio.play();
        btn.innerHTML = "Pause";
    } else {
        video.pause();
        audio.pause();
        btn.innerHTML = "Play";
    }
}

const mute = document.getElementById("slient");
mute.addEventListener('click', m);

function m() {
    if(audio.muted) {
        audio.muted = false; 
        mute.innerHTML = "Mute";    
    }
    
    else {
        audio.muted = true;
        mute.innerHTML = "Volume";  
      }
}


const linkBtn = document.getElementById("naver");
const newWindow = document.getElementById("newWindow");

linkBtn.addEventListener('click', newLink);
function newLink() {
    window.location.href = 'https://www.naver.com';
    
}

newWindow.addEventListener('click', newPage);
function newPage() {
    window.open('ghost.html');
}