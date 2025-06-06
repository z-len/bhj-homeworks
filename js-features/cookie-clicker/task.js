
const counter = document.getElementById('clicker__counter');
const cookie = document.getElementById('cookie');


let isBig = false;


cookie.onclick = function () {
 
  counter.textContent = parseInt(counter.textContent) + 1;


  if (isBig) {
    cookie.width = 200; 
  } else {
    cookie.width = 250; 
  }


  isBig = !isBig;
};
