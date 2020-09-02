const wall = document.getElementsByClassName('wall')[0];
const text = document.getElementsByClassName('text')[0];
const btn = document.getElementsByClassName('btn')[0];
console.log(btn);

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

btn.addEventListener('click', function(){
    wall.style.background = "#" + ("000000" + Math.floor(Math.random() * 0xFFFFFF).toString(16)).substr(-6);
    text.textContent = "#" + ("000000" + Math.floor(Math.random() * 0xFFFFFF).toString(16)).substr(-6);

});