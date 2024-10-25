const tabBtns = document.querySelectorAll('.hero .tab-btns li');

function changeContent(id){
    const item = document.querySelectorAll('.hero .hero-content .item');
    const itemimg = document.querySelectorAll('.hero .hero-images .item-img');
    item.forEach(item => {
        item.classList.remove('active');
    })
    itemimg.forEach(item => {
        item.classList.remove('active');
    })
    tabBtns.forEach(btn => {
        btn.classList.remove('active');
    })
    document.getElementById(`item-${id}`).classList.add('active');
    document.getElementById(`item-image-${id}`).classList.add('active');
    document.getElementById(`tab-btn-${id}`).classList.add('active');
}

tabBtns.forEach(btn => {
    btn.addEventListener('click',()=>{
        let id = btn.dataset.id;
        changeContent(id);
    })
})

let id = 1;
function automatic(){
    changeContent(id);
    id++;
    if(id >= 4){
        id = 1;
    }
}
setInterval(automatic,2000)

//case study
let activecase = 1;

function changeActiveCase(){
    const caseStudyContent = document.querySelectorAll('.case-studies-section .case-studies .case-study');
    caseStudyContent.forEach(content => {
        content.classList.remove('active')
    })

    document.getElementById(`case-study-${activecase}`).classList.add('active');
    document.getElementById(`slider-img`).src = `./images/slider/slider-${activecase}.png`

}

function prevCase(){
    if(activecase === 1){
        activecase = 3
    }
    else{
        activecase--;
    }
    changeActiveCase();
}
function nextCase(){
    if(activecase === 3){
        activecase = 1
    }
    else{
        activecase++;
    }
    changeActiveCase();
}






//animate the video

// Get the element you want to observe
const element = document.querySelector('.bg-video .bg-mask');

// Function to check if element is in viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    
    return (
        rect.top <= window.innerHeight - (rect.height/2)
    );
}

// Function to add class when element enters viewport
function addClassOnScroll() {
    if (isElementInViewport(element)) {
        element.classList.add('active-animation'); // Replace 'visible' with your desired class name
        // Remove the scroll listener after adding the class, if needed
        window.removeEventListener('scroll', addClassOnScroll);
    }
}

// Add scroll event listener to check on scroll
window.addEventListener('scroll', addClassOnScroll);

// Check once on page load
addClassOnScroll();


//gsap

var tl = gsap.timeline();

ScrollTrigger.create({
  trigger: '.bg-video',
  start: 'top 10%',
  onEnter: function() {
    tl.to('.bg-video .video .bg-mask', {
      scale: 1000,
      opacity: 0,
      duration: 48
    });
  }
});