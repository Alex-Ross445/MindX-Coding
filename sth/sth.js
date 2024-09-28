function change() {
    let x = document.getElementById("div");
    let status = x.getAttribute("status");
    if(status == "open") {
        x.style.right = "100%";
    }
}

function color() {
    let x = document.getElementById("square1");
    x.style.backgroundColor = "blue";
}