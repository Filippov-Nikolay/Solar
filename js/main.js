let linkList = document.querySelectorAll('.menu__link');
let sliderContent = document.querySelectorAll('.rate__slider-content');

linkList.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        linkList.forEach(link => {
            link.classList.remove('menu__link--active');
        });
        link.classList.add('menu__link--active');

        let hrefValue = link.getAttribute('href');
        let content = document.querySelector(hrefValue);
        sliderContent.forEach(content => {
            content.classList.remove('rate__slider-content--active');
        });
        content.classList.add('rate__slider-content--active');
    });
});

document.querySelector('.menu__link').click();