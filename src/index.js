import './styles/main.scss';
import * as lodash from 'lodash-es'
import printMe from './print.js'


const accIndex = document.querySelectorAll(".cmp-accordion__item");
const accButtons = document.querySelectorAll(".cmp-accordion__button");
const accPanels = document.querySelectorAll(".cmp-accordion__panel");
let singleExpansion = document.querySelector(".accordion-component").getAttribute('data-single-expansion');

    
// Accordion function
accIndex.forEach(function(userItem) {
    let accButton = userItem.querySelector(".cmp-accordion__button");
    let accPanel = userItem.querySelector(".cmp-accordion__panel");

    accButton.addEventListener("click", function() {
        for (var i = 0; i < accButtons.length; i++) {
        if(singleExpansion = 'true') {
            accButtons[i].classList.remove("active");
            accPanels[i].classList.remove("active");
        }}

        if(accButton.getAttribute('aria-expanded') === 'false') {
            accButton.classList.add("active");
            accPanel.classList.add("active");
            accButton.setAttribute('aria-expanded', 'true');
        }

        else if(accButton.getAttribute('aria-expanded') === 'true') {
            accButton.classList.remove("active");
            accPanel.classList.remove("active");
            accButton.setAttribute('aria-expanded', 'false');
        }  


    });
});