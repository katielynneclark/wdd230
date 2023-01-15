const mybtn = document.querySelector('header button')
const mynav = document.querySelector('nav')

mybtn.addEventListener('click', ()=>{
    mynav.classList.toggle('open')
})
