// // border around text in about section
//
// let aboutBorder = document.getElementsByClassName('about_myself')[0];
// let aboutArray = ['pink','yellow','lightgreen'];
// let teller = 0;
//
// function tester() {
// teller++;
// aboutBorder.style.borderColor =  aboutArray[teller];
// aboutBorder.style.transition = "all 2s";
// if (teller == 2) {
//   teller = -1;
// }
// };
//
//
// setInterval(tester, 1000)

let menuButton = document.getElementsByClassName('menuButton')[0];
let menu = document.getElementsByClassName('menu')[0];
let teller = 0;

menuButton.onclick = function(items) {
  if (teller = 0) {
    teller++
  }
  else {
    menu.style.transition = 'all 500ms ease-in-out';
    menu.style.height = '100vh';
    menu.style.opacity = 1;
    teller = 0;
  }
}

menu.onclick = function close() {
  menu.style.height = '0vh';
  menu.style.opacity = 0;
  teller = 0;
}
