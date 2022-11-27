// AOS Animation
AOS.init();

// Hamburger Section
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

// Scroll To Button
var mybutton = document.getElementById("ScrollBtn");
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

var project = $('.project-carousel');
project.owlCarousel({
    items:1,
    margin: 10,
    loop:true,
    dots: false,
    autoHeight:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:1,
        },
        1000:{
            items:1,
        }
    }
})

var owl = $('.owl-carousel');
owl.owlCarousel({
    items:5,
    loop:true,
    dots: false,
    margin:20,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:3,
        },
        1000:{
            items:5,
        }
    }
})

var date = new Date();
const todaydate = document.querySelector('.date');
const todayday = document.querySelector('.day');
const noofday = ["Sunday!","Monday!","Tuesday!","Wednesday!","Thursday!","Friday!","Saturday!",];

function printDay(){
  var date = new Date();
  var today = date.getDay();
  var day = noofday[today];
  todayday.innerHTML = day;
}
printDay();

$(document).keydown(function(e){ 
  if(e.which === 123){ 

     return false; 

  } 

}); 
