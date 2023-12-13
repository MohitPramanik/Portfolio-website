let cross = document.getElementById('cross');
let hamburger = document.getElementById('hamburger');
let menu = document.querySelector('.menu-div');
let main = document.getElementsByTagName('main')[0];

const showCross = () => {
    hamburger.style.display = 'none';
    cross.style.display = 'block';
    menu.style.animationName = 'move-down';
    main.style.animationName = 'move-down';
    menu.style.display = 'flex';
    console.log("clicked bar");
}

const showBars = () => {
    cross.style.display = 'none';
    hamburger.style.display = 'block';
    // menu.style.display = 'none';
    menu.style.animationName = 'move-up';
    main.style.animationName = 'move-up';
    console.log("clicked cross");
}

cross.addEventListener("click", showBars);
hamburger.addEventListener("click", showCross);


  