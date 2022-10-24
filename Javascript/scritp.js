<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
// ======Funcion para el modal perfil======
var dialog = document.getElementById("myDialog");
document.getElementById("show").onclick = function () {
  dialog.showModal();
};
document.getElementById("hide").onclick = function () {
  dialog.close();
};
// barra desplazamiento
$(document).ready(function() {
  $('.backtotop').css({'display': 'none'});
    var offset = 200;
    var duration = 600;
    $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
            $('.backtotop').fadeIn(duration);
        } else {
            $('.backtotop').fadeOut(duration);
        }
    });
 
    $('.backtotop').click(function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, duration);
        return false;
    })
});