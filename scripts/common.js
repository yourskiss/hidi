/* page refresh on orientation change === START */
$(window).on('orientationchange', function () 
{
    location.reload(true);
});
/* page refresh on orientation change === END */
 

$(window).on('load', function() 
{
 
});


 

$('.talentslideRow1, .talentslideRow2').slick({
    speed: 6000,
    autoplay: true,
    autoplaySpeed: 0,
    centerMode: false,
    centerPadding: '15',
    cssEase: 'linear',
    slidesToShow:4,
    slidesToScroll:1,
    variableWidth: false,
    adaptiveHeight:false,
    infinite: true,
    initialSlide:0,
    arrows: false,
    buttons: false,
    pauseOnHover: false,
    pauseOnFocus: false,
    accessibility: false,
    draggable: false,
    swipe: false,
    touchMove: false,
    responsive:
            [ 
                {
                    breakpoint: 1255,
                    settings: { slidesToShow:3 }
                },
                {
                    breakpoint: 1023,
                    settings: { slidesToShow:2 }
                },
                {
                    breakpoint: 479,
                    settings: { centerPadding: '10', slidesToShow:1 }
                } 
            ]
  });
   
 


 