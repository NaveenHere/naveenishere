function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }
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