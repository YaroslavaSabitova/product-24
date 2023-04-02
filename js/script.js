$(document).ready(function(){
    $(".slider").bxSlider();
});

var rellax = new Rellax('.rellax', {
    speed: -2,
    center: false,
    wrapper: null,
    round: true,
    vertical: true,
    horizontal: false
});

const accordion__items = [...document.querySelectorAll('.accordion__item')]; 

accordion__items.forEach((item) => { 
    const btn = item.querySelector('.accordion__header__title'); 
    const text = item.querySelector('.accordion__text__wrapper'); 
    let height; 
    resize(); 

    if (!item.classList.contains('active')) { 
        text.style.height = '0px';  
    }

    function addOrRemoveHeight(height) {
        if (item.classList.contains('active')) {
            text.style.height = height + 'px'; 
        } else {
            text.style.height = '0px'; 
        }
    }

    function resize() {
        text.style.height = 'auto'; 
        height = text.scrollHeight; 
        addOrRemoveHeight(height); 
    }

    window.addEventListener('resize', resize); 

    btn.addEventListener('click', () => { 
        item.classList.toggle('active'); 
        addOrRemoveHeight(height); 
    });
});