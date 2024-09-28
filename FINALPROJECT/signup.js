function changeleft() {
    let index = document.getElementById("side");
    let status = index.getAttribute("status");
    if(status == "open") {
        index.src = "img/signup.png";
        index.style.left = "50%";
    }
}

function changeright() {
    let index = document.getElementById("side");
    let status = index.getAttribute("status");
    if(status == "open") {
        index.src = "img/signin.png";
        index.style.left = "0%";
    }
}