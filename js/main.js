let linkList = document.querySelectorAll('.menu__link');
let sliderContent = document.querySelectorAll('.rate__tab-content');

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
            content.classList.remove('rate__tab-content--active');
        });
        content.classList.add('rate__tab-content--active');
    });
});

document.querySelector('.menu__link').click();

$(function() {
    $('.tab-about__slider').slick({
        speed: 500,
        fade: true,
        cssEase: 'linear',
        nextArrow: '<svg class="slick-next" width="41" height="8" viewBox="0 0 41 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M40.3536 4.35355C40.5488 4.15829 40.5488 3.84171 40.3536 3.64645L37.1716 0.464466C36.9763 0.269204 36.6597 0.269204 36.4645 0.464466C36.2692 0.659728 36.2692 0.976311 36.4645 1.17157L39.2929 4L36.4645 6.82843C36.2692 7.02369 36.2692 7.34027 36.4645 7.53553C36.6597 7.7308 36.9763 7.7308 37.1716 7.53553L40.3536 4.35355ZM0 4.5H40V3.5H0V4.5Z" fill="#303030"/></svg>',
        prevArrow: '<svg class="slick-prev" width="41" height="8" viewBox="0 0 41 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.646446 3.64645C0.451183 3.84171 0.451183 4.15829 0.646446 4.35355L3.82843 7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976311 4.7308 0.659728 4.53553 0.464466C4.34027 0.269204 4.02369 0.269204 3.82843 0.464466L0.646446 3.64645ZM41 3.5L1 3.5V4.5L41 4.5V3.5Z" fill="#303030"/></svg>'
    });
}); 