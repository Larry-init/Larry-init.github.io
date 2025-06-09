//Particles.js for background
particlesJS.load('particles-js', 'particles.json',function(){
    console.log("particles.js loaded")
})

//Job description
let job = [
    {
        "name":"DevOps Engineer",
    },
    {
        "name":"Technology Enthusiast"
    },
    {
        "name":"Automation Engineer"
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
AOS.init(
    {
        offset: 200,
        duration: 500
    }
);

//Script for hamburger and times for menu dropdown

let bar = document.getElementsByClassName('bar')[0],
    faBars = document.getElementsByClassName('faBars')[0],
    noHamburger = document.getElementsByClassName('noHamburgerMenu')[0],
    faTimes = document.getElementsByClassName('faTimes')[0];


faBars.addEventListener('click', function(){
    if(bar.classList.contains('bar')){
        bar.classList.toggle('noBar');
        noHamburger.classList.toggle('hamburger');
        bar.classList.toggle('bar');
    }
})

faTimes.addEventListener('click', function(){
    if(noHamburger.classList.contains('hamburger')){
        noHamburger.classList.toggle('hamburger');
        bar.classList.toggle('bar');
    }
})