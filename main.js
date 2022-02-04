// Hamburger section
function openNav() {
  document.getElementById("myNav").style.width = "50%";
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

// See more toggle button
let toggle_see = document.getElementById('toggle_see');
let row = document.querySelector('.row');
toggle_see.addEventListener('click', () => {
  row.classList.toggle('row_toggle');
  if (row.classList.contains('row_toggle')) {
    toggle_see.innerHTML = 'See More Designs <i class="fas fa-chevron-down"></i>';
  } else {
    toggle_see.innerHTML = 'See Less Designs <i class="fas fa-chevron-up"></i>';
  }
})
