


  $('.multiple-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite:true
        }
      },
     
    ]
  });
          
  
  
  
  
  
  
  
  
  
  
  
 

  $('.autoplay').slick({
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplay:true,
    autoplaySpeed: 1000,
    prevArrow: false,
    nextArrow: false,
    dots:true,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots:false,
        }
      },
      {
        breakpoint:1300,
        settings:{
          slidesToShow:2,
          slidesToScroll:1,
          infinite:true,
          dots:false,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite:true,
          dots:false,
        }
      },
     {
       breakpoint:768,
       settings:{
         slidesToShow:1,
         slidesToScroll:1,
         infinite:true,
         dots:false,
       }
     }
    ]
  });