let x = prompt("Enter number?");

let word = document.getElementById("word");

if(x%2 == 0) {
    word.innerHTML = x + " " + "là số chẵn"
}else{
    word.innerHTML = x + " " + "là số lẻ"
};

function number() {
    let input = document.getElementById("insert");
    let h2 = document.getElementById("sth");
    let y = input.value;
    if(y%2 == 0) {
        h2.innerHTML = "số chẵn";
    }else {
        h2.innerHTML = "số lẻ";
    };
};l