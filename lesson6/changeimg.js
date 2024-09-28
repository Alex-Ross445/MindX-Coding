//function check(){
    // let a = prompt("Insert num:");
    // console.log(a);
//    alert('MindX');
//    console.log('abc');
//};

function check() {
    let div = document.getElementById("square");
    div.style.backgroundColor = prompt("color?");
};

function game() {
    let btn = document.getElementById("square");
    btn.style.backgroundColor = "blue";
}

function changeimg() {
    let changeimg = document.getElementById("img")
    changeimg.src = "img/elen.jpg";
}

function change_src(str) {
    let img = document.getElementById("img");
    img.src = str;
}