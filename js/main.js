

// Smooth Scrolling
$('#navbar a, .btn').on('click',function(event) {
  if(this.hash!== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 60
      },
      800
    );
  }
});




// Sticky Menu Background
window.addEventListener('scroll', function() {
  if(window.scrollY > 250) {
    this.document.querySelector('#navbar').style.opacity = 0.8;
  } else {
    this.document.querySelector('#navbar').style.opacity = 1;
  }
});