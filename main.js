function revealMyInfo(myName, className, color) {
  let htmlElement = document.querySelector(className);

  htmlElement.innerHTML = myName;
  htmlElement.style.color = color;
}

//function revealMyName(myName,index) {
//let span = document.getElementsByTagName("span");

//span[0].innerHTML = myName;
// span[index].innerHTML = myName;
