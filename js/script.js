//Particles.js for background
particlesJS.load('particles-js', 'particles.json',function(){
    console.log("particles.js loaded")
})

//Job description
let job = [
    {
        "name":"Front-end Developer",
    },
    {
        "name":"Programmer",
    },
    {
        "name":"Electrical Engineer"
    },
    {
        "name":"Software Engineer"
    }
]

let skills = document.querySelector('.skills'),
    time = 2000,
    count = 0;

function myJob(){
        skills.textContent = job[count].name;
        count++;
        if(count > job.length-1){
            count = 0;
        }
}
setInterval(myJob, time)

//toggle modal classes

let modalSection = document.getElementsByClassName('modalSection')[0],
    dms = document.querySelector('.displayModalSection'),
    contactForm = document.querySelector('.formButton'),
    times = document.querySelector('.times');

//Listen for event when submit button is clicked
contactForm.addEventListener('click', function(){
    if(modalSection.classList.contains('modalSection')){
        modalSection.classList.toggle('displayModalSection')
    }
})

//listen for event when times button is clicked
times.addEventListener('click', function(){
    if(modalSection.classList.contains('modalSection')){
        modalSection.classList.toggle('displayModalSection');
    }else{
        modalSection.classList.toggle('modalSection')
    }
})

//Animation on scroll using the AOS library
// AOS.init(
//     {
//         offset: 200,
//         duration: 500
//     }
// );

//Script for hamburger and times for menu dropdown
let noHamburger = document.getElementsByClassName('noHamburgerMenu')[0],
    hamburger = document.getElementsByClassName('hamburgerMenu')[0],
    noBar = document.getElementsByClassName('noBar')[0],
    bar = document.getElementsByClassName('bar')[0],
    faBars = document.querySelector('.faBars'),
    faTimes = document.querySelector('.faTimes');

faBars.addEventListener('click', function(){
    if(noHamburger.classList.contains('noHamburgerMenu')){
        noHamburger.classList.remove('noHamburgerMenu');
        noHamburger.classList.add('hamburgerMenu');
        bar.classList.toggle('noBar');
    }
})
faTimes.addEventListener('click', function (){
    if(noHamburger.classList.contains('hamburgerMenu')){
        hamburger.classList.remove('hamburgerMenu');
        hamburger.classList.add('noHamburgerMenu');
    }
})