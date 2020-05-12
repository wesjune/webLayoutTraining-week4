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