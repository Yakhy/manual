$(function(){
 
  $('.zander-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: '200px',
    prevArrow: '<img class="zander-arrows zander-prev" src="images/next.png">',
    nextArrow: '<img class="zander-arrows zander-next" src="images/next.png">',
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1.5,
          arrows: false,
        }
      }
    ]
  });
  

  $('.guide-slider').slick({
    dots: false,
    infinite: true,
    arrows: false,
    speed: 300,
    slidesToShow: 4,
    centerMode: true,
    centerPadding: '5px',
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3
        }
      },
    
    
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2.5
        }
      },
    
   
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2
        }
      },
    
  
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1.5,
        }
      
      }
    ]
  });

  let headerBtn = $('.menu-btn'),
  xBtn = $('.x-btn'),
  read = $('.header-read');


headerBtn.on('click', function(){
 read.addClass('header-read_active')
})

xBtn.on('click', function(){
 read.removeClass('header-read_active')
})

})

  AOS.init();

