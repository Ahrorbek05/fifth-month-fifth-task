const check = document.querySelector('.check #check');
const dark = document.querySelector('.dark-mode-page');
const light = document.querySelector('.light-mode-page');
const info = document.querySelector('.light-mode-page .light-text');
const text = document.querySelector('.light-text h4');
const text1 = document.querySelector('.light-text p');
const img = document.querySelector('.light-mode-page .light-img');
const image = document.querySelector('.light-mode-page .light-img-second');
const darkText = document.querySelector('.dark-text h4');
const darkImg = document.querySelector('.dark-text p');
const darkSecond = document.querySelector('.dark-img img');
const darkSecondImg = document.querySelector('.dark-img-second');
const button = document.querySelector('.dark-mode-page button');
const button1 = document.querySelector('.header button');
const button2 = document.querySelector('button');
const third = document.querySelector('.light-third-img img');
const third1 = document.querySelector('.dark-third-img img');
check.addEventListener('click', function () {
    dark.style.backgroundColor = 'rgba(244, 244, 245, 1)';
    darkText.style.display = 'none';
    darkImg.style.display = 'none';
    darkSecond.style.display = 'none';
    darkSecondImg.style.display = 'none';
    button.style.display = 'none';
    text1.style.color = 'rgba(212, 212, 216, 1)';
    third1.style.display = 'none';
});
check.addEventListener('click', function () {
    light.style.backgroundColor = 'rgba(24, 24, 27, 1)';
    info.style.display = 'block';
    img.style.display = 'block';
    image.style.display = 'block';
    text.style.color = 'white';
    button1.style.display = 'block';
});

button1.addEventListener('click', function () {
    button2.style.display = 'block';
    dark.style.backgroundColor = 'rgba(244, 244, 245, 1)';
    darkText.style.display = 'block';
    darkImg.style.display = 'block';
    darkSecond.style.display = 'block';
    darkSecondImg.style.display = 'block';
    button.style.display = 'block';
    text1.style.color = 'rgba(212, 212, 216, 1)';
    third1.style.display = 'block';

    light.style.backgroundColor = 'rgba(24, 24, 27, 1)';
    info.style.display = 'none';
    img.style.display = 'none';
    image.style.display = 'none';
    text.style.color = 'white';
    button1.style.display = 'none';
    third.style.display = 'none';
    third1.style.display = 'block';
});