

$('#closeBTN').click(function() {
    $('#cookie-banner').hide();
});


$('#acceptBTN').click(function() {

    localStorage.setItem('cookieSeen','shown');
    
    $('#cookie-banner').hide();
});




var banner = document.getElementById('cookie-banner');

if (localStorage.getItem('cookieSeen') != 'shown') {
    setTimeout( function(){ banner.style.display = "initial"; }   , 10000 );

};

