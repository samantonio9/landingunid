/**
 * Created by zamisantonio on 23/06/17.
 */
$(document).ready(function(){

    /*initialize swiper when document ready*/
    var mySwiper = new Swiper ('#swiperhome', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        loop: true,
        direction: 'horizontal',
        autoplay: 5000,
        centeredSlides: true,
        effect: 'fade'

    });

    /*$('.modal-dialog').on('click tap', function(e){
     if ($(e.target).hasClass('modal-dialog')) {
     $('.modal').modal('hide');
     }
     })*/

    var scroll_start = 0;
    var startchange = $('body');
    var offset = startchange.offset();
    if (startchange.length){
        $(document).scroll(function() {
            scroll_start = $(this).scrollTop();
            if(scroll_start > offset.top) {
                $(".navbar").addClass('scrolled');
            } else {
                $('.navbar').removeClass('scrolled');
            }
        });
    }
});