/* Carousel */

var prevBtn = document.getElementById('btn-prev');
var nextBtn = document.getElementById('btn-next');

var firstImage = document.getElementsByClassName('source')[0];
var secondImage = document.getElementsByClassName('source')[1];
var thirdImage = document.getElementsByClassName('source')[2];

var firstNav = document.querySelectorAll('#nav > img')[0];
var secondNav = document.querySelectorAll('#nav > img')[1];
var thirdNav = document.querySelectorAll('#nav > img')[2];

nextBtn.addEventListener('click', function(){
    let current = document.querySelector('.source.active');
    current.classList.remove('active');
    
    let currentNav = document.querySelector('#nav > img.active');
    currentNav.setAttribute('src', 'img/not-selected-v2.png');
    currentNav.classList.remove('active');
    
    let nextImage = '';
    let nextNav = '';
    if(current.getAttribute('src') === firstImage.getAttribute('src')){
        nextImage = secondImage;
        nextNav = secondNav;
    }else if(current.getAttribute('src') === secondImage.getAttribute('src')){
        nextImage = thirdImage;
        nextNav = thirdNav;
    }else{
        nextImage = firstImage;
        nextNav = firstNav;
    }
        
    nextImage.classList.add('active');
    
    nextNav.setAttribute('src', 'img/selected-v2.png');
    nextNav.classList.add('active');
});


prevBtn.addEventListener('click', function(){
    let current = document.querySelector('.source.active');
    current.classList.remove('active');
    
    let currentNav = document.querySelector('#nav > img.active');
    currentNav.setAttribute('src', 'img/not-selected-v2.png');
    currentNav.classList.remove('active');
    
    let nextImage = '';
    let nextNav = '';
    if(current.getAttribute('src') === firstImage.getAttribute('src')){
        nextImage = thirdImage;
        nextNav = thirdNav;
    }else if(current.getAttribute('src') === secondImage.getAttribute('src')){
        nextImage = firstImage;
        nextNav = firstNav;
    }else{
        nextImage = secondImage;
        nextNav = secondNav;
    }
    
    nextImage.classList.add('active');
    
    nextNav.setAttribute('src', 'img/selected-v2.png');
    nextNav.classList.add('active');
});

var timer = setInterval(function(){
    nextBtn.click();
}, 10000);