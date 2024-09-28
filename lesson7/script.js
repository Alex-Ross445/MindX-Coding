// let x = 1;

// if(x == prompt("enter num?")) {
//     alert("True")
// }else{
//     alert("False")
// };

// let check = confirm("18 years old yet?");

// if(check == true) {
//     window.location.href ="https://ln.hako.re/"
// }else{
//     alert("false")
// };

// let a = prompt("num?");

// if(a < 6) {
//     alert("Game");
// }else if(a >= 6 && a < 8) {
//     alert("An")
// }else {
//     alert("Nghi")
// };

function check_acc() {
    let acc = document.getElementById("acc");
    let pass = document.getElementById("pass");
    let fakeacc = "tuan";
    let fakepass = "123456";
    if(acc.value == fakeacc) {
        if(pass.value == fakepass) {
            window.location.href = "https://manganelo.com/"
        }else {
            pass.style.backgroundColor = "red";
        }
        alert("dung")
    }else {
        acc.style.color = "red";
    };
}