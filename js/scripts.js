window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
// "assets/mobile-dark.svg"
const chk = document.getElementById('chk');
const bgLight = document.querySelectorAll('.bg-light')
const bgDark = document.querySelectorAll('.bg-dark');
const inputs = document.querySelectorAll('.form-control');
const blueButton = document.getElementById('get-started');
const darkText = document.querySelectorAll('.text-dark');
const realEstate = document.getElementById('real-estate');
const mobileSvg = document.getElementById('mobile');
const moon = document.querySelector('.bi-moon');
const sun = document.querySelector('.bi-sun');
const label = document.querySelector('.label')
const toggle = document.querySelector('.toggle')
const logo = document.querySelectorAll('.logo')
const heroImg = document.querySelectorAll('.hero-img');
const border = document.querySelector('#footer');
const navbarToggler = document.querySelector('.navbar-toggler')
const borderColor = document.querySelectorAll('.border-gray');
const bgBlack = document.querySelector('.bg-black');

chk.addEventListener('change', ($event) => {
    const isChecked = document.getElementById('chk').checked
    if (isChecked) {
        bgBlack.classList.remove('bg-black')
        bgBlack.classList.add('bg-gray-100')
        mobileSvg.setAttribute('src', "assets/mobile-dark.svg")

        logo.forEach(item => {
            item.setAttribute('src', "assets/logo-light.svg")
        })
        heroImg.forEach(el => el.classList.add('opacity-75'))
        border.classList.add('footer-dark');
        border.classList.remove('footer-light')
     
        navbarToggler.classList.add('text-white');
        borderColor.forEach(el => {
            el.classList.remove('border-gray')
            el.classList.add('border-custom')
        });
    } else {
        border.classList.add('footer-light')
        border.classList.remove('footer-dark')
        bgBlack.classList.add('bg-black')
        bgBlack.classList.remove('bg-gray-100')
        navbarToggler.classList.add('text-dark')
        navbarToggler.classList.remove('text-white')
        mobileSvg.setAttribute('src', "assets/mobile.svg")
        logo.forEach(item => {
            item.setAttribute('src', "assets/logo-dark.svg")
        })
        heroImg.forEach(el => el.classList.remove('opacity-75'))
        
    }
    if (isChecked) {
        label.classList.add('label-color');
        label.classList.remove('color-before');
        moon.classList.remove('d-none');
        sun.classList.add('d-none');

    } else {
        console.log('no hello');
        label.classList.add('color-before')
        label.classList.remove('label-color')
        sun.classList.remove('d-none')
        moon.classList.add('d-none')
    }
    bgLight.forEach(el => {
        if (el.classList.contains('bg-light')) {
            el.classList.remove('bg-light');
            el.classList.add("bg-gray-100")
            el.classList.add('text-white')
        } else if (el.classList.contains('bg-gray-100')) {
            el.classList.add('bg-light');
            el.classList.remove("bg-gray-100")
            el.classList.remove('text-white')
        }
    })
    if (isChecked) {
        blueButton.classList.remove('bg-primary');
        blueButton.classList.add('bg-gray-100');
    } else {
        blueButton.classList.add('bg-primary');
        blueButton.classList.remove('bg-gray-100');

    }
    darkText.forEach(el => {
        if (el.classList.contains('text-dark')) {
            el.classList.remove('text-dark');
            el.classList.add('text-white')
        } else if (el.classList.contains('text-white')) {
            el.classList.remove('text-white');

            el.classList.add('text-dark')
        }
    })
    inputs.forEach(el => {
        el.classList.toggle('dark')
    })
    if (realEstate.classList.contains('real-estate')) {
        realEstate.classList.remove('real-estate')
        realEstate.classList.add('real-estate-dark')
        realEstate.classList.add('text-white')
        realEstate.classList.remove('text-dark')

    } else if (realEstate.classList.contains('real-estate-dark')) {
        realEstate.classList.add('text-dark');
        realEstate.classList.remove('text-white')
        realEstate.classList.remove('real-estate-dark')
        realEstate.classList.add('real-estate')
    }
    //    console.log(bgLight);
    if (isChecked) {
        document.body.classList.add('bg-dark');
        document.body.classList.remove('bg-white')
    } else {
        document.body.classList.remove('bg-dark');
        document.body.classList.add('bg-white');

    }


});