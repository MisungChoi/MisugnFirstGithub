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