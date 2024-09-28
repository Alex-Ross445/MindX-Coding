function animation() {
    let wing1 = document.getElementById("leftwing");
    let wing2 = document.getElementById("rightwing");
    let status = wing1.getAttribute("status");
    let status2 = wing2.getAttribute("status");
    if(status == "open",status2 == "open") {
        wing1.style.left = "-50%";
        wing1.setAttribute("status","close");
        wing2.style.right = "-50%";
        wing2.setAttribute("status","close");
    }else if(status == "close",status2 == "close") {
        wing1.style.left = "0%";
        wing1.setAttribute("status","open");
        wing2.style.right = "0%";
        wing2.setAttribute("status","open");
    }
};

function changeright() {
    let img = document.getElementById("img");
    let gain = img.getAttribute("count");
    if(gain == "1") {
        img.src = "img2.jpg";
        img.setAttribute("count","2");
    }else if(gain == "2") {
        img.src = "img3.jpg"
        img.setAttribute("count","3");
    }else if(gain == "3") {
        img.src = "img4.jpg"
        img.setAttribute("count","4");
    }else if(gain == "4") {
        img.src = "img5.jpg"
        img.setAttribute("count","5");
    }else if(gain == "5") {
        img.src = "img1.jpg"
        img.setAttribute("count","1");
    }
};

function changeleft() {
    let img = document.getElementById("img");
    let gain = img.getAttribute("count");
    if(gain == "1") {
        img.src = "img5.jpg";
        img.setAttribute("count","5");
    }else if(gain == "5") {
        img.src = "img4.jpg"
        img.setAttribute("count","4");
    }else if(gain == "4") {
        img.src = "img3.jpg"
        img.setAttribute("count","3");
    }else if(gain == "3") {
        img.src = "img2.jpg"
        img.setAttribute("count","2");
    }else if(gain == "2") {
        img.src = "img1.jpg"
        img.setAttribute("count","1");
    }
};