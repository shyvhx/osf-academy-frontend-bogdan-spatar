

let myElements = document.querySelectorAll(".preview");

for (let i = 1; i < myElements.length; i++) {
	myElements[i].style.opacity = 0.4;
}



function changeToBlSpate() {
    document.getElementById("bigItemPic").src = "p-img/bl.spate.mare.jpg";
    myElements[0].style.opacity = 0.4;
    myElements[1].style.opacity = 1;
    myElements[2].style.opacity = 0.4;
    myElements[3].style.opacity = 0.4;

}
function changeToBlFata() {
    document.getElementById("bigItemPic").src = "p-img/bl.fata.mare.jpg";
    myElements[0].style.opacity = 1;
    myElements[1].style.opacity = 0.4;
    myElements[2].style.opacity = 0.4;
    myElements[3].style.opacity = 0.4;
}

function changeToTqSpate() {
    document.getElementById("bigItemPic").src = "p-img/tq.spate.mare.jpg";
    myElements[0].style.opacity = 0.4;
    myElements[1].style.opacity = 0.4;
    myElements[2].style.opacity = 0.4;
    myElements[3].style.opacity = 1;
}
function changeToTqFata() {
document.getElementById("bigItemPic").src = "p-img/tq.fata.mare.jpg";
myElements[0].style.opacity = 0.4;
myElements[1].style.opacity = 0.4;
myElements[2].style.opacity = 1;
myElements[3].style.opacity = 0.4;
}


$( '#descriptionBtn' ).click(function() {

    document.getElementById("descriptionBtn").className = "activeBtn";
    document.getElementById("infoBtn").className = "inactiveBtn";
    document.getElementById("reviewBtn").className = "inactiveBtn";


    document.getElementById("descriptionTab").style.display = "block";
    document.getElementById("descriptionTab1").style.display = "block";
    document.getElementById("infoTab").style.display = "none";
    document.getElementById("reviewTab").style.display = "none";
    
});

$( '#infoBtn' ).click(function() {

    document.getElementById("descriptionBtn").className = "inactiveBtn";
    document.getElementById("infoBtn").className = "activeBtn";
    document.getElementById("reviewBtn").className = "inactiveBtn";

    document.getElementById("descriptionTab").style.display = "none";
    document.getElementById("descriptionTab1").style.display = "none";
    document.getElementById("infoTab").style.display = "block";
    document.getElementById("reviewTab").style.display = "none";
});





$( '#reviewBtn' ).click(function() {

    document.getElementById("descriptionBtn").className = "inactiveBtn";
    document.getElementById("infoBtn").className = "inactiveBtn";
    document.getElementById("reviewBtn").className = "activeBtn";

    document.getElementById("descriptionTab").style.display = "none";
    document.getElementById("descriptionTab1").style.display = "none";
    document.getElementById("infoTab").style.display = "none";
    document.getElementById("reviewTab").style.display = "block";
});

$('#readMoreButton').click(function(){
    document.getElementById("show").style.opacity = "1";
    document.getElementById("show2").style.opacity = "1";



});



// Product page

n =  1;

document.getElementById("quantity").innerHTML = n;


$( '#minusBtn' ).click(function() {
    if(n>1)
        n--;
        document.getElementById("quantity").innerHTML = n;

    
});

$( '#plusBtn' ).click(function() {
    n++;

    document.getElementById("quantity").innerHTML = n;

    
});


$( '.cartWithValueBtn' ).click(function() {
    wishlistItems= wishlistItems + n;
    document.getElementById("cartItems").innerHTML = wishlistItems;
});