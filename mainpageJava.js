




$(document).on('click', '.dropdown-menu', function (e) {
    e.stopPropagation();
  });


$( '#productButton' ).click(function() {
    $('.sub-menu1').toggle();
});

$( '#saleButton' ).click(function() {
    $('.sub-menu2').toggle();
});

$( '#categoriestButton' ).click(function() {
    $('.categoriestList').toggle();
});




n =  new Date();
y = n.getFullYear();

document.getElementById("date").innerHTML =y;


cartItems = 0;
wishlistItems = 0;

document.getElementById("wishlistItems").innerHTML = wishlistItems;
document.getElementById("cartItems").innerHTML = cartItems;
document.getElementById("wishlistItems1").innerHTML = wishlistItems;
document.getElementById("cartItems1").innerHTML = cartItems;


$( '.buynowBtn' ).click(function() {
    cartItems++;
    document.getElementById("cartItems").innerHTML = cartItems;
    document.getElementById("cartItems1").innerHTML = cartItems;
});

$( '.wishlistBtn' ).click(function() {
    wishlistItems++;
    document.getElementById("wishlistItems").innerHTML = wishlistItems;
    document.getElementById("wishlistItems1").innerHTML = wishlistItems;
});


