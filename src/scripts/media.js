const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navBarLinks = document.getElementsByClassName('navbar-links')[0];
const linksForNavigation = document.getElementsByClassName('navButton');
toggleButton.addEventListener('click', toggleAction);
for (let i = 0; i < linksForNavigation.length; i++){
    linksForNavigation[i].addEventListener('click', toggleAction);
}


function toggleAction(){
    navBarLinks.classList.toggle('active');
}