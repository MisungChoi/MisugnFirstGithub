// setInterval(createSnow, 100);

function createSnow() {
    const el = document.createElement("div");
    el.classList.add('snow');

    el.style.marginLeft = Math.random() * window.innerWidth + "px";
    
    el.style.opacity = Math.random();
    el.style.animationDuration = Math.random() * 5 + 4 + 's';
    
    document.body.appendChild(el);

    // setTimeout(() => {
    //     snow.remove();
    //  }, 5000);
}


for(let i=0; i<300; i++) {
    createSnow();
}