let body = document.querySelector('#body')

document.getElementById("mode-button").addEventListener("click", function () {
    body.classList.toggle('dark-blue')
    let isDark = body.classList.contains('dark-blue');
    document.documentElement.style.setProperty("--text", isDark ? "white" : "#0A192F");
    document.documentElement.style.setProperty("--text2", isDark ? "white" : "#1E3A5F");
    document.documentElement.style.setProperty("--white", isDark ? "rgba(30, 58, 95, 0.4)" : "rgba(255, 255, 255, 0.4)");
    document.documentElement.style.setProperty("--pure-white", isDark ? '#0A192F' : "white");
});

let menu = document.querySelector('#menu-icon')
let navbar = document.querySelector('.nav-container')
let mode = document.querySelector('#mode-button')
let sun = document.querySelector('#sun')
let moon = document.querySelector('#moon')

menu.onclick = () => {
    menu.classList.toggle('bi-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bi-x');
    navbar.classList.remove('active');
}

mode.onclick = () => {
    mode.classList.toggle('night')
    let isDark = mode.classList.contains('night');
    moon.classList.remove(isDark ? 'mode-off' : 'mode-on')
    sun.classList.add(isDark ? 'mode-off' : 'mode-on')
    sun.classList.remove(isDark ? 'mode-on' : 'mode-off')
    moon.classList.add(isDark ? 'mode-on' : 'mode-off')
}

const sr = ScrollReveal({
    distance: '60px',
    duration: 2000,
    delay: 100,
    reset: true,
    origin: 'top'
})

sr.reveal('.project')
sr.reveal('.skill')
sr.reveal('.soft-skill')
sr.reveal('.about')
sr.reveal('.contact-container')
sr.reveal('.hero-text')
sr.reveal('.profile', { delay: 200 })