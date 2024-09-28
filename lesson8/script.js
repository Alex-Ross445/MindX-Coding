function changeimg() {
    let img = document.getElementById("img");
    let index = img.getAttribute("count");
    //lấy gtrị count
    if(index == "1") {
        img.src = "Wonder_Woman.jpg";
        img.setAttribute("count","2");
        //xét lại gtrị count
    }else if(index == "2") {
        img.src = "TsukasaTsukuyomi.jpg";
        img.setAttribute("count","3");
            //xét lại gtrị count
    }else if(index == "3") {
        img.src = "BlackWidow.jpg";
        img.setAttribute("count","1");
            //xét lại gtrị count
    }
};

function animation() {
    let cv = document.getElementById("cover");
    let status = cv.getAttribute("status");
    if(status == "open") {
        cv.style.left = "-100%";
        cv.setAttribute("status","close");
    }else if(status == "close") {
        cv.style.left = "0%";
        cv.setAttribute("status","open");
    }
    // delay hành động
    // cv.style.left = "-100%";
    // setTimeout(function() {
    //     cv.style.left = "0%"
    // }, 2000); //milisec
};