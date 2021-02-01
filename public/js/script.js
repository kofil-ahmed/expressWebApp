const hidemenu = document.querySelector('.hide_menu');
const openmenu = document.querySelector('.open_menu');
const menu = document.querySelector('.head_link_page');

hidemenu.addEventListener('click',()=>{
    menu.classList.add('hide');
    openmenu.classList.remove('hide');
})
openmenu.addEventListener('click',()=>{
    menu.classList.remove('hide');
    openmenu.classList.add('hide');
})