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
AOS.init(
    {
        offset: 350,
        duration: 500
    }
);

//Make active link have color
