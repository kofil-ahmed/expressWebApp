const hidemenu = document.querySelector('.hide_menu');
const openmenu = document.querySelector('.open_menu');
const menu = document.querySelector('.head_link_page');

var x = window.matchMedia("(max-width: 800px)")
function myFunction(x) {
    if (x.matches) { // If media query matches
        menu.classList.add('hide');
    } else {
        menu.classList.remove('hide');
    }
  }
  myFunction(x) // Call listener function at run time
  
hidemenu.addEventListener('click',()=>{
    menu.classList.add('hide');
    openmenu.classList.remove('hide');
})
openmenu.addEventListener('click',()=>{
    menu.classList.remove('hide');
    openmenu.classList.add('hide');
})