var slideIndex = 0 ;

showSlides();

function showSlides() {
	var i;
	var slides = document.getElementsByClassName("mySlides");

	for (i= 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	// console.log(slides[1]);
	slideIndex++;
	if (slideIndex > slides.length) {
		slideIndex = 1;

	}
	slides[slideIndex-1].style.display = "block";  

	setTimeout(showSlides, 2000); 

}


// Modal

var modal = document.getElementById("myModal");


// Get the button that opens the modal
var btns = document.getElementsByClassName("myBtn");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


// close button
var buttonClose = document.getElementsByClassName("btn")[0];
console.log(buttonClose);
buttonClose.onclick = function() {
	modal.style.display= "none";
}


// When the user clicks on the button, open the modal



for (var i = 0; i < btns.length; i++) {
	btns[i].onclick = function(){
		modal.style.display = "block";
	}
}

// When the user clicks on <span> (x), close the modal
console.log(span);
span.onclick = function() {
	modal.style.display= "none";
}




// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";

	}
}
