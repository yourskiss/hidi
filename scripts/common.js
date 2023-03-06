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
    centerPadding: '0',
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
    responsive:
            [ 
                {
                    breakpoint: 1255,
                    settings: { slidesToShow:3 }
                },
                {
                    breakpoint: 767,
                    settings: { slidesToShow:2 }
                },
                {
                    breakpoint: 479,
                    settings: { slidesToShow:1 }
                } 
            ]
  });
   
 


 