'use stict'; 
const customParseFormat = window.dayjs_plugin_customParseFormat;
console.log(customParseFormat); 
dayjs.extend(customParseFormat);

const progress = document.getElementById("progress"); 
const progressSteps = document.querySelectorAll(".status-circle")
let progressActive = document.querySelectorAll(".progress-step-active");


progressSteps.forEach(event => {
  
  const eventTimeData = event.getAttribute('data-time')
  if (eventTimeData != null) {
    const eventTime = dayjs(eventTimeData, "H:mm")
    console.log(eventTime)
    if(eventTime.isBefore(dayjs())){
      event.classList.remove('progress-step-active') 
      event.querySelector(".event-time").classList.replace('event-time','event-time-disabled');
      event.querySelector(".event-name").classList.replace('event-name','event-name-disabled');
    }
  }

})
updateProgressbar();




function updateProgressbar() {
  
  const progressDisactive = document.querySelectorAll(".progress-step-active");
  const allStep = document.querySelectorAll(".status-circle");

  let currHeight = (100 - ((progressDisactive.length -1 ) / (allStep.length - 1)) * 100) + "%";
  progress.style.height = currHeight
  
  progressActive = document.querySelectorAll(".progress-step-active")

  console.log(currHeight)
}

setTimeout(() => {
  const yOffset = -25; 
  const y = progressActive.item(0).getBoundingClientRect().top + window.pageYOffset + yOffset;
  window.scrollTo({top: y, behavior: 'smooth'});
}, "100")





//Footer section


let drawer_open = false;

document.querySelector(".cta-button").addEventListener("mouseup",function(){
  cta_button_hide.play();
})

document.querySelector(".back-btn").addEventListener("mouseup",function(){
  if(drawer_open) {
  slidedown.play();
  cta_button_show.play();
  }
})

let cta_button_show = anime({
    targets: ['.cta-button','.cta-text'],
    translateY: ['-15','0'],
    opacity: ['0','1'],
    easing: 'easeInOutSine',
    delay: anime.stagger(200),
    autoplay: false,
    // loop: false
  duration: 500,
  complete: function(){
    }
  });

let cta_button_hide = anime({
    targets: ['.cta-button','.cta-text'],
    translateY: ['0','-15'],
    opacity: ['1','0'],
    easing: 'easeInOutSine',
    delay: anime.stagger(200),
    autoplay: false,
    // loop: false
  duration: 500,
  complete: function(){
      slideup.play();
    drawer_open = true;
    }
  });


let slidedown = anime({
    targets: '.footer-container',
    translateY: 485,
    duartion: 1000,
    autoplay: false,
    begin: function(){
      show_hideCTA("block");
      drawer_open = false;
    }
})

let slideup = anime({
    targets: '.footer-container',
    translateY: [485,0],
    autoplay: false,
    begin: function(){
     show_hideCTA("none");
    }
})



function show_hideCTA(param){
    document.querySelector(".cta-button").style.display=param;
     document.querySelector(".cta-text").style.display=param;
}




document.querySelector(".header-bottom-title").textContent += (dayjs().format('DD-MM'));


// Get the modal
var modal = document.querySelectorAll('.modal');

// Get the button that opens the modal
var btn = document.querySelectorAll(".status-circle");

// Get the <span> element that closes the modal
var span = document.querySelectorAll(".close");

// When the user clicks on the button, open the modal



btn.forEach(element => {
  let id = element.getAttribute('data-id');
  id--;
  element.addEventListener("click",function(){
    
      modal.item(id).classList.add('show-modal');
      console.log(id);
  })
  
})

// When the user clicks on <span> (x), close the modal
span.forEach(element => {
  let id_span = element.getAttribute('data-id'); 
  id_span--;
  element.addEventListener("click",function(){    
      modal.item(id_span).classList.remove('show-modal');
      console.log(id_span);
  })
  
})

