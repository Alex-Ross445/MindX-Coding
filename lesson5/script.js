alert("BACK AWAY");

let firstVar = 123;
console.log(firstVar);
console.log("firstVar");

firstVar = 200;
console.log(firstVar);

let secondVar = "MindX NCT";
console.log(secondVar)

let check = confirm("REPEAT: BACK AWAY");//confirm=alert
console.log(check);

let inputNum = prompt("Insert Number?")
console.log(inputNum);

let random = Math.floor(Math.random() * 6);
console.log(random);

let div = document.getElementById("container");
console.log(div.innerHTML);
div.innerHTML = "MINDX NCT";
div.style.backgroundColor = "red";
div.style.color = "blue";

let babyplanet = document.getElementById("babyplanet");
let blackhole = document.getElementById("blackhole");
console.log(babyplanet.src);
console.log(blackhole.src);
babyplanet.style.borderRadius = "50%";
babyplanet.src = "img/blackhole.jpg";