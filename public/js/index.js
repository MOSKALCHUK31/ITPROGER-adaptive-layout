var arr = document.querySelectorAll(".row"); // get array with rows from html
var btn = document.querySelector(".row .buttonmore button");
var width = window.innerWidth;

var a = 2;

btn.onclick = function() {
  if (width <= 380) {
    for (var i = a; i < a + 2; i++) {
      if (arr[i].style.display = "none")
      {
        arr[i].style.display = "block";
      }
    }
    a += 2;
    if (a >= 6) {
      btn.style.display = "none";
    }
  }
  else {
    for (var i = a; i < a + 2; i++) {
      if (arr[i].style.display = "none")
      {
        arr[i].style.display = "flex";
      }
    }
    a += 2;
    if (a >= 6) {
      btn.style.display = "none";
    }
  }
};

var close = document.querySelector(".closebtn");
var searchBlock = document.querySelector(".search-block");
var searchMain = document.querySelector(".searchMain");

close.onclick = function () {
  searchBlock.style.display = "none";
};

searchMain.onfocus = function () {
    searchBlock.style.display = "flex";
};
