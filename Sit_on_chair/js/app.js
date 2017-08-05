document.addEventListener("DOMContentLoaded", function() {

  //Menu
  var ulDrop = document.querySelector('nav > ul > li').children[1];
  var aDrop = document.getElementById('dropdown');

  aDrop.addEventListener("mouseover", function() {
    ulDrop.style.display = "flex";
  });

  aDrop.addEventListener("mouseout", function() {
    ulDrop.style.display = "none";
  });

//

  var prev = document.getElementById('prevArrow');
  var next = document.getElementById('nextArrow');
  var slide1 = document.getElementById('first_slide');
  var slide2 = document.getElementById('second_slide');

  prev.addEventListener("click", function() {
    slide2.style.display = "none";
    slide1.style.display = "flex";
  });

  next.addEventListener("click", function() {
    slide1.style.display = "none";
    slide2.style.display = "flex";
  });

//

  var stripe = document.getElementsByClassName('stripe');
  var image = document.getElementsByClassName('image');
  console.log(stripe);

  for(var i=0; i<image.length-1; i++){
    image[i].addEventListener('mouseover', function() {
      this.children[0].style.display = 'none';
    });
    image[i].addEventListener('mouseout', function() {
      this.children[0].style.display = 'flex';
    });

  }


/*

var prev = document.getElementById('prevArrow');
    var next = document.getElementById('nextArrow');
    var slides = document.getElementsByClassName(slider);
    var index = 0;

    slides[index].classList.add('visible');

    next.addEventListener("click", function() {
      console.log("click, id " + index);
      slides[index].classList.remove('visible');
      index++;
      if (index == slides.length) {
        index = 0;
      }
      slides[index].classList.add('visible');
    });

    prev.addEventListener("click", function() {
      console.log("click, id " + index);
      slides[index].classList.remove('visible');
      index--;
      if (index < 0) {
        index = slides.length - 1;
      }
      slides[index].classList.add('visible');
    });

    */



});
