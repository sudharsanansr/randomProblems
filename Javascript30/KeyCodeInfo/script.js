document.addEventListener('DOMContentLoaded',function contentLoaded(e){
    console.log(e);
    console.log('Content loaded!');
});

window.addEventListener('keydown',function pressedKey(e){
    let element = document.querySelector('#main-content');
    element.innerHTML = e.keyCode;
    let paragraph = document.querySelector('#main-content-text');
    paragraph.innerHTML = `You pressed " ${e.key.toUpperCase()} "!`;
})