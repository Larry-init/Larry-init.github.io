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

