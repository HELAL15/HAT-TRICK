


$(document).ready(function(){
    // dir
    var bodyDir = $('body').css('direction')
    var dirAr
    if(bodyDir == "rtl"){
      dirAr= true
    }
    else{
      dirAr = false
    }


    
    
    // loader
    $('#loading').fadeOut(500);

    new WOW().init();













//      play and pause video       //


let play = document.getElementById("play");
let pause = document.getElementById("pause");
let video = document.getElementById("video");
let overlay = document.getElementById("overlay");


if (play !== null) {
    
    pause.style.display = "none";

    
    play.addEventListener("click", function() {
        
        play.style.display = "none";
        pause.style.display = "flex";
        overlay.classList.add("active");
        video.play();
    });

    pause.addEventListener("click", function() {
        
        pause.style.display = "none";
        play.style.display = "flex";
        overlay.classList.remove("active");
        video.pause();
    });
}




    

// function showBG() {
//   let scroll = window.scrollY;
//   let isNavTop = scroll < 50;
//   let nav = document.getElementById('nav');
//   if ( isNavTop) {
//     nav.classList.remove('scrolling');
//   } else {
//     nav.classList.add('scrolling');
//   }
// }
// let nav = document.getElementById('nav');
// if(nav != null){
//   window.addEventListener('scroll', showBG);
// }


    // const navToggler = document.getElementById("nav-toggler");
    // const collapse = document.querySelector(".navbar-collapse");
    // const close = document.getElementById("close");

    // close.addEventListener("click" , ()=>{
    //   collapse.classList.remove("active")
    // })

    // navToggler.addEventListener("click" , ()=>{
    //   collapse.classList.toggle("active")
    // })




    const headerSwiper = new Swiper('header .swiper', {
      slidesPerView: 1,
      
      grid: {
        rows: 1,
      },
      mousewheel: {
        forceToAxis: true,
      },
      // Optional parameters
      direction: 'horizontal',
      loop: true,


      // Autoplay settings
      autoplay: {
        delay: 8000, 
        disableOnInteraction: false, 
      },


      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },

    });






    //end
    
});







