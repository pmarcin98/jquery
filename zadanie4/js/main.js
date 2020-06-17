$(document).ready(function(){

    $('.accordion-item').click(function() {

        if($(this).hasClass('open')) {

            $(this).removeClass('open');
            /* $('.accordion-content').slideDown(); */
            $(this).find('.accordion-content').slideUp();

        } else {
            $(this).addClass('open');
            /* $('.accordion-content').slideDown(); */
            $(this).find('.accordion-content').slideDown();
        }
        
    });
    
});