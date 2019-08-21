var slideIndex = 1;

function plusDivs(n,g) {
  showDivs(slideIndex += n,g);
}

function showDivs(n,g) {
  var i;
  var x = document.getElementsByClassName(g);
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}

function showElem(){
  var elem = document.getElementById('1');
  var elem2 = document.getElementById('2');
  elem.classList.remove('xyz');
  elem2.classList.remove('xyz');
  console.log(1);
}