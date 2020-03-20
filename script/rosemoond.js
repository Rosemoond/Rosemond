
/*кнопка вверх*/
const toTopButton = document.querySelector('#toTop');
console.log(toTopButton);
$(function() {
 
$(window).scroll(function() {

if($(this).scrollTop() > 600) {
 
$('#toTop').fadeIn();
 
} else {
 
$('#toTop').fadeOut();

}
 
});
 
$('#toTop').click(function() {
 
$('body,html').animate({scrollTop:0},800);
 
});
 
});
$("a.scroll-to").on("click", function(e){
    e.preventDefault();
    var anchor = $(this).attr('href');
    $('html, body').stop().animate({
        scrollTop: $(anchor).offset().top - 60
    }, 800);
});