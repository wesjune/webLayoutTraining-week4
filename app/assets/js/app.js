/* Header Navigation Toggle */
const navToggle = document.querySelector('.header__nav--toggle');
const nav = document.querySelector('.header__nav');

navToggle.addEventListener('click', e => {
    e.preventDefault();
    nav.classList.toggle('active');
    navToggle.classList.toggle('active');
});


/* FAQ Accordion */
const accordionHeaders = document.querySelectorAll('.accordion__header');

accordionHeaders.forEach(accordionHeader => {
    accordionHeader.addEventListener("click", e => {
        e.preventDefault();
        
        const activeAccordionHeader = document.querySelector(".accordion__header.active");
        if (activeAccordionHeader && activeAccordionHeader !== accordionHeader) {
            activeAccordionHeader.classList.toggle("active");
            activeAccordionHeader.nextElementSibling.style.maxHeight = 0;
        }
    
        accordionHeader.classList.toggle("active");
        const accordionBody = accordionHeader.nextElementSibling;

        if (accordionHeader.classList.contains("active")) {
            accordionBody.style.maxHeight = accordionBody.scrollHeight + "px";
        } else {
            accordionBody.style.maxHeight = 0;
        }
    });
});


/* AOS */
AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 160, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 1200, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});