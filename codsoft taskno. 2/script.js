var form = document.getElementById('form');

form.addEventListener("submit", function(event){
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    localStorage.setItem("full name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("message", message);
})

/*----------------------------------HOME---------------------------- */

let home = document.querySelector(".home");
window.addEventListener('load', function() {
    gsap.from(home, {duration: 1.5, opacity: 0, y: 50});
});


/*----------------------------------EDUCATION---------------------------- */

function edu_animate() {
    document.querySelectorAll('.slide-animate').forEach((element) => {
        element.classList.remove('slide-animate');
        void element.offsetWidth; 
        element.classList.add('slide-animate');
    });
}

document.addEventListener('DOMContentLoaded', function() {
    edu_animate();
});


window.addEventListener('popstate', function() {
    edu_animate();
});

window.addEventListener('scroll', function() {
    edu_animate();
});

/*---------------------------------- PROJECTS---------------------------- */

function a1Section() {
    document.querySelectorAll('.a1').forEach((element) => {
        element.classList.remove('a1');
        void element.offsetWidth; 
        element.classList.add('a1');
    });
}

document.addEventListener('DOMContentLoaded', function() {
    a1Section();
});


window.addEventListener('popstate', function() {
    a1Section();
});

window.addEventListener('scroll', function() {
    a1Section();
});


// a2


function animateSections() {
    document.querySelectorAll('.a2').forEach((element) => {
        element.classList.remove('a2');
        void element.offsetWidth; 
        element.classList.add('a2');
    });
}

document.addEventListener('DOMContentLoaded', function() {
    animateSections();
});


window.addEventListener('popstate', function() {
    animateSections();
});

window.addEventListener('scroll', function() {
    animateSections();
});


let sidemenu = document.querySelector(".hero");
let closeicon = document.getElementById('closeicon');
let openicon = document.getElementById('openicon');

function openmenu(){
    sidemenu.style.right = "0";
    openicon.style.display= "none";
    closeicon.style.display= "block";
}

function closemenu(){
    sidemenu.style.right = "-17rem";
    openicon.style.display= "block";
    closeicon.style.display= "none";
}


