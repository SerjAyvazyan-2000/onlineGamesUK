const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const header = document.querySelector('header');
const menuBg = document.querySelector('.menu-bg');
const headerBody = document.querySelector('.header-body');



document.addEventListener('DOMContentLoaded', function () {
    burger.addEventListener("click", function (e) {
        if (menu.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    });
    menuBg.addEventListener("click", function (e) {
        if (menu.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    });
    document.querySelectorAll('.menu-list li a').forEach(link => {
        link.addEventListener("click", closeMenu);
    });

    function openMenu() {
        menu.classList.add('active');
        burger.classList.add('active');
        header.classList.add('active');
        menuBg.classList.add('active');
        headerBody.classList.add('active');


    }

    function closeMenu() {
        menu.classList.remove('active');
        burger.classList.remove('active');
        header.classList.remove('active');
        menuBg.classList.remove('active');
        headerBody.classList.remove('active');

    }


});

window.addEventListener('scroll', function () {
    const headerTop = document.querySelector('header')


    if (window.scrollY > 0) {
        headerTop.classList.add('moved');

    } else {
        headerTop.classList.remove('moved');

    }
});

document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const active = button.classList.contains('active');
        document.querySelectorAll('.faq-question').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.faq-answer').forEach(ans => {
            ans.style.maxHeight = null;
            ans.style.paddingBottom = '0';
        });

        if (!active) {
            button.classList.add('active');
            const answer = button.nextElementSibling;
            answer.style.maxHeight = answer.scrollHeight + 'px';
            answer.style.paddingBottom = '10px';
        }
    });
});

document.querySelectorAll('.home-link ').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});



document.addEventListener('DOMContentLoaded', function() {
    if (!localStorage.getItem('cookieAccepted')) {
        document.getElementById('cookie-banner').style.display = 'block';
    }

    document.getElementById('accept-cookie').addEventListener('click', function() {
        localStorage.setItem('cookieAccepted', 'true');

        document.getElementById('cookie-banner').style.display = 'none';
    });
});

const swiper = new Swiper(".mySwiper", {
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        }
    }
});


