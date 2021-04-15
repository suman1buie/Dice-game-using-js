let p = document;
let d1 = document.getElementsByClassName("dice-pic1");
let d2 = document.getElementsByClassName("dice2-pic1");
let massage = document.getElementsByClassName("msg");
let f1 = document.getElementsByClassName("flg1");
let f2 = document.getElementsByClassName("flg2");

let randomNumber = () => {
  let number = Math.random() * 6;
  number = Math.ceil(number);
  return number;
};

function findOut() {
  let num1 = randomNumber();
  let num2 = randomNumber();
  d1[0].src = `/resourse/d${num1}.png `;
  d2[0].src = `/resourse/d${num2}.png `;
  console.log(massage[0], f1[0]);
  if (num1 > num2) {
    massage[0].innerHTML = `<h1>Player One won </h1>`;
    massage[0].classList.add("msg");
  } else if (num1 === num2) {
    massage[0].innerHTML = `<h1>Match Drawn</h1>`;
  } else {
    massage[0].innerHTML = `<h1>Player Two won </h1>`;
    massage[0].classList.add("msg");
  }
}

findOut();
document = p;
