/*!
* Start Bootstrap - New Age v6.0.6 (https://startbootstrap.com/theme/new-age)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-new-age/blob/master/LICENSE)
*/
//
// Scripts
// 

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
const inputs = document.querySelectorAll('.bg-light');
const blueButton = document.getElementById('get-started');
const darkText = document.querySelectorAll('.text-dark');
const realEstate = document.getElementById('real-estate');
const mobileSvg = document.getElementById('mobile');

console.log(darkText);
chk.addEventListener('change', () => {
    if (mobileSvg.hasAttribute('src', "assets/mobile.svg")) {
        mobileSvg.setAttribute('src', "assets/mobile-dark.svg")
       
    }
    else if (mobileSvg.hasAttribute('src', "assets/mobile-dark.svg")) {
        mobileSvg.setAttribute('src', "assets/mobile.svg")
        
    }
   
    const masthead = document.getElementById('masthead')
    if (masthead.classList.contains('bg-white')) {
        masthead.classList.remove('bg-white');
        masthead.classList.add("bg-dark")
        masthead.classList.add('text-white')
    }
    else if(masthead.classList.contains('bg-dark')){
        masthead.classList.remove('bg-dark');
        masthead.classList.add('bg-white')
        masthead.classList.remove('text-white')
    }
    bgLight.forEach(el => {
        if (el.classList.contains('bg-light') ) {
            el.classList.remove('bg-light');
            el.classList.add("bg-dark")
            el.classList.add('text-white')
        }
        else if (el.classList.contains('bg-gray-50') ) {
            el.classList.add('bg-light');
            el.classList.remove("bg-gray-50")
            el.classList.remove('text-white')
        }
    })
    if (blueButton.classList.contains('bg-primary')){
        blueButton.classList.remove('bg-primary');
        blueButton.classList.add('bg-gray-100');
    }
    else if (blueButton.classList.contains('bg-gray-100')) {
        blueButton.classList.add('bg-primary');
        blueButton.classList.remove('bg-gray-100');

    }
    darkText.forEach(el => {
        if (el.classList.contains('text-dark') ) {
            el.classList.remove('text-dark');
            el.classList.add('text-white')
        }
        else if (el.classList.contains('text-white') ) {
            el.classList.remove('text-white');
            
            el.classList.add('text-dark')
        }
    })
    inputs.forEach(el => {
        if (el.classList.contains('form-control') ) {
            el.classList.add('bg-black');
            el.classList.remove('form-control')
        }
        else if (el.classList.contains('bg-black') ) {
            el.classList.remove('bg-black');
            
            el.classList.add('form-control')
        }
    })
    if (realEstate.classList.contains('real-estate')) {
        realEstate.classList.remove('real-estate')
        realEstate.classList.add('real-estate-dark')
        realEstate.classList.add('text-white')
        realEstate.classList.remove('text-dark')
        
    }
    else if (realEstate.classList.contains('real-estate-dark')) {
        realEstate.classList.add('text-dark');
        realEstate.classList.remove('text-white')
        realEstate.classList.remove('real-estate-dark')
        realEstate.classList.add('real-estate')
    }
//    console.log(bgLight);
    if (document.body.classList.contains('bg-white')) {
        document.body.classList.add('bg-dark');
        document.body.classList.remove('bg-white')
    }
    else if (document.body.classList.contains('bg-dark')) {
        document.body.classList.add('bg-white');
        document.body.classList.remove('bg-dark')
    }
    
    
});
