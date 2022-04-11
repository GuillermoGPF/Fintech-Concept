/*---------------------------------------------------------------------------------------------------------------------------*/
/*-                                                    Fintech Scripts                                                       -*/
/*---------------------------------------------------------------------------------------------------------------------------*/

$(document).ready(function() {
    // Login / Register
    $('#login-link').click(function(e) {
        $("#login-form").delay(400).fadeIn(400);
        $("#register-form").fadeOut(400);
        $('#register-link').removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
    });

    $('#register-link').click(function(e) {
        $("#register-form").delay(400).fadeIn(400);
        $("#login-form").fadeOut(400);
        $('#login-link').removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
    });

    // Forms
    $('.form2').hide();
    $('#continuar1').click(function () {
        $('.form1').hide('fade');
        $('.form2').show('fade');
    });

    $('.form4').hide();
    $('#continuar2').click(function () {
        $('.form3').hide('fade');
        $('.form4').show('fade');
    });

    // Alert
    $('.anuncio1').show();
    $('.anuncio2').hide();
    $('.anuncio3').hide();
    $('.anuncio4').hide();
    $('.anuncio5').hide(); 
    setTimeout(function() { 
        $('.anuncio1').hide('fade');
    }, 10000);  
    
    setTimeout(function() { 
        $('.anuncio2').show('fade');
    }, 11000);
    setTimeout(function() { 
        $('.anuncio2').hide('fade');
    }, 20000);   
    
    setTimeout(function() { 
        $('.anuncio3').show('fade');
    }, 21000);
    setTimeout(function() { 
        $('.anuncio3').hide('fade');
    }, 30000);
    
    setTimeout(function() { 
        $('.anuncio4').show('fade');
    }, 31000);
    setTimeout(function() { 
        $('.anuncio4').hide('fade');
    }, 40000);
    
    setTimeout(function() { 
        $('.anuncio5').show('fade');
    }, 41000); 
    setTimeout(function() { 
        $('.anuncio5').hide('fade');
    }, 50000);
});