/* page refresh on orientation change === START */
$(window).on('orientationchange', function () 
{
    location.reload(true);
});
/* page refresh on orientation change === END */
 

$(window).on('load', function() 
{
 
});
/* hide video === end */


$(".profileunlocks .profileunlockinner .profileunlockright ul li").click(function()
{
    var getDataID = $(this).attr('data-id');
    $(".profileunlocks .profileunlockinner .profileunlockleft div img").fadeOut(300);
    $(".profileunlocks .profileunlockinner .profileunlockright ul li").removeClass("active");
    $(this).addClass("active");
    $(".profileunlocks .profileunlockinner .profileunlockleft div img[data-id='"+getDataID+"']").fadeIn(300);

    
});


  
// social slider   === start 
$(function($) 
{
    if($(".navslider").length > 0)
    {
        $('.navslider').slick({
            slidesToShow:6,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            autoplay: false,
            autoplaySpeed: 3000,
            infinite: false,
            adaptiveHeight: false,
            variableWidth: false,
            centerMode: false,
            centerPadding: '0',
            initialSlide:0,
            responsive:
            [ 
                {
                     breakpoint: 99999,
                     settings: "unslick"
                },
                {
                    breakpoint: 1003,
                    settings: { slidesToShow:5 }
                },
                {
                    breakpoint: 767,
                    settings: { slidesToShow:4 }
                },
                {
                    breakpoint: 599,
                    settings: {  slidesToShow:3 }
                },
                {
                    breakpoint: 479,
                    settings: { slidesToShow:2 }
                },
                {
                    breakpoint: 300,
                    settings: { slidesToShow:1  }
                }
            ]
        });
    }
});

 


 