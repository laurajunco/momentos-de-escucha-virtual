$( "#barra_1" ).load( "ajax/umbral.html")
$( "#barra_2" ).load( "ajax/intro.html")
$( "#barra_3" ).load( "ajax/bojaya.html" , function() {
    $('.linea-tiempo').slick({
        slidesToShow: 6,
        speed: 9000,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        pauseOnFocus: false,
        pauseOnHover: false,
        infinite: true
    });
})
$( "#barra_4" ).load( "ajax/mampujan.html")
$( "#barra_5" ).load( "ajax/hacer.html")
$( "#barra_6" ).load( "ajax/creditos.html")
$( "#menu" ).load( "ajax/menu.html")