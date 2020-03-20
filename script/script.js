$(window).ready(function() {
  $(".header").fadeIn('slow');
});
const mainWitcher = document.querySelector('.main-witcher'),
      mainTXF =  document.querySelector('.main-txf'),
      mainAutor =  document.querySelector('.main-autor'),

      witcherButton = document.querySelector('.witcher'),
      txfButton = document.querySelector('.txf'),
      autorButton = document.querySelector('.autor');
    

function showElem(elem) {
        elem.style.display = 'flex';
    }
    
function hideElem(elem) {
        elem.style.display = 'none';
    } 
witcherButton.addEventListener('click', function(){
    
    $('.main-txf').fadeOut(1000);
    $('.main-autor').fadeOut(1000);
    $('.main-witcher').fadeIn(1000);
});
txfButton.addEventListener('click', function(){
    $('.main-witcher').fadeOut(1000);
    
    $('.main-autor').fadeOut(1000);
    $('.main-txf').fadeIn(1000);

});
autorButton.addEventListener('click', function(){
    $('.main-witcher').fadeOut(1000);
    $('.main-txf').fadeOut(1000);
    $('.main-autor').fadeIn(1000);
});
