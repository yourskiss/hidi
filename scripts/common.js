/* page refresh on orientation change === START */
$(window).on('orientationchange', function () 
{
    location.reload(true);
});
/* page refresh on orientation change === END */
 

$(window).on('load', function() 
{
 
});



$(".profileunlocks .profileunlockinner .profileunlockright ul li").click(function()
{
    var getDataID = $(this).attr('data-id');
    $(".profileunlocks .profileunlockinner .profileunlockleft div img").fadeOut(250);
    $(".profileunlocks .profileunlockinner .profileunlockright ul li").removeClass("active");
    $(this).addClass("active");
    $(".profileunlocks .profileunlockinner .profileunlockleft div img[data-id='"+getDataID+"']").fadeIn(400);  
});
 

$('.talentslideRow1').slick({
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
    responsive:
            [ 
                {
                    breakpoint: 1300,
                    settings: { slidesToShow:3 }
                },
                {
                    breakpoint: 1023,
                    settings: { slidesToShow:2 }
                },
                {
                    breakpoint: 599,
                    settings: { slidesToShow:1 }
                } 
            ]
  });
  
$('.talentslideRow2').slick({
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
    responsive:
            [ 
                {
                    breakpoint: 1300,
                    settings: { slidesToShow:3 }
                },
                {
                    breakpoint: 1023,
                    settings: { slidesToShow:2 }
                },
                {
                    breakpoint: 599,
                    settings: { slidesToShow:1 }
                } 
            ]
  });
 
 


 