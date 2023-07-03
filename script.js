//your code here
const imgs = document.querySelectorAll("img");
let imgArr = Array.from(imgs);
let randomPhotoAdded = imgArr[Math.round(Math.random()*5)];
imgArr.push(randomPhotoAdded);
