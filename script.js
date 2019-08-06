// external js: masonry.pkgd.js, imagesloaded.pkgd.js

// init Masonry
var grid = document.querySelector('.grid');

var msnry = new Masonry( grid, {
itemSelector: '.grid-item',
columnWidth: '.grid-sizer',
percentPosition: true
});

imagesLoaded( grid ).on( 'progress', function() {
// layout Masonry after each image loads
msnry.layout();
});

//POPUP
function maquetteFunction() {
  var maquettePopup = document.getElementById("maquettePopup");
  maquettePopup.classList.toggle("show");
}
function interfaceStatiqueFunction() {
  var interfacePopup = document.getElementById("interfaceStatiquePopup");
  interfacePopup.classList.toggle("show");
}
function interfaceDynamiqueFunction() {
  var interfacePopup = document.getElementById("interfaceDynamiquePopup");
  interfacePopup.classList.toggle("show");
}
function cmsFunction() {
  var interfacePopup = document.getElementById("cmsPopup");
  interfacePopup.classList.toggle("show");
}
function bddFunction() {
  var interfacePopup = document.getElementById("bddPopup");
  interfacePopup.classList.toggle("show");
}
function accesFunction() {
  var interfacePopup = document.getElementById("accesPopup");
  interfacePopup.classList.toggle("show");
}
function backendFunction() {
  var interfacePopup = document.getElementById("backendPopup");
  interfacePopup.classList.toggle("show");
}
function composantsFunction() {
  var interfacePopup = document.getElementById("composantsPopup");
  interfacePopup.classList.toggle("show");
}
