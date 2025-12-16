/*===== Menu show =====*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click',()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== Active and remove menu =====*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    // Active link
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    // Remove menu mobile
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*===== Scroll reveal animation =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1500,
    reset: true
})

/*===== Scroll home =====*/
sr.reveal('.home__title',{})
sr.reveal('.button', {delay:100})
sr.reveal('.home__img', {delay: 200})
sr.reveal('.home__social-icon', {interval: 100})

/*===== Scroll about =====*/
sr.reveal('.about__img', {})
sr.reveal('.about__subtitle', {delay: 100})
sr.reveal('.about__text', {delay: 200})

/*===== Scroll education =====*/
sr.reveal('.education__content', {delay: 100})

/*===== Scroll skills =====*/
sr.reveal('.skills__subtitle',{})
sr.reveal('.skills__text',{delay: 120})
sr.reveal('.skills__data',{interval: 100})
sr.reveal('.skills__img',{delay:150})

/*===== Scroll work =====*/
sr.reveal('.work__img',{delay: 80})
sr.reveal('.property-card', {delay: 50})

/*===== Scroll contact =====*/
sr.reveal('.contact__input',{delay: 60})

/*===== Active menu =====*/

/*===== f-header color =====*/
// $(function () {
//     $(document).scroll(function () {
//       var $nav = $(".f-header");
//       $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
//     });
//   });