// Enable every popovers in the page
$(function () {
    $('[data-toggle="popover"]').popover()
})

// Modals
// Get the modal
var modal = document.getElementById('profileModal');


// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('profile-icon');
var modalImg = document.getElementById("profileImg");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
};

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
};
// When the user clicks on the model image, close the model
modal.addEventListener("mousedown", function () {
    modal.style.display = "none";
});

