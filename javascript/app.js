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
const lang = document.getElementById('select');
const uzbek = document.getElementById('select');
const buttonLang = document.querySelectorAll('.languages button');
const buttonLang1 = document.querySelector('.languages button:nth-child(1)');
const buttonLang2 = document.querySelector('.languages button:nth-child(2)');
const buttonLang3 = document.querySelector('.languages button:nth-child(3)');
const mode1 = document.querySelector('h3');
const mode2 = document.querySelector('#mode-class');
const hero = document.querySelector('.light-text button');
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

button1.addEventListener('click',  function () {
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
buttonLang1.addEventListener('click', function () {
    text.textContent = 'Figma bilan ijodkorlik kuchini oching!';
    text1.textContent = "Dizayn o'yiningizni oshirishga tayyormisiz?";
    hero.textContent = "Sinab ko'ring";
    mode1.textContent = 'Yorqin rejim';
    mode2.textContent = 'Tungi rejim';
});

buttonLang3.addEventListener('click', function () {
    text.textContent = 'Раскройте силу творчества с Figma!';
    text1.textContent = "Готовы улучшить свою дизайнерскую игру?";
    hero.textContent = "Попробуйте";
    mode1.textContent = 'яркий режим';
    mode2.textContent = 'ночной режим'
});