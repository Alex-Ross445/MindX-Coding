function openbio() {
    let total_hide = document.getElementById("total-hide");
    let hide = document.getElementById("hide");
    let status = total_hide.getAttribute("status");
    if (status == "close") {
        hide.style.display = "block";
        total_hide.innerText = "Đóng";
        total_hide.setAttribute("status", "open");
    }else{
        hide.style.display = "none"
        total_hide.setAttribute("status", "close");
        total_hide.innerText = "Xem toàn bộ";
    }
};

function moveup(id) {
    let baseimg = document.getElementsByClassName("base-img")[id];
    baseimg.style.marginTop = "-100%";
    baseimg.style.opacity = "0";

    let exchangeimg = document.getElementsByClassName("img-hide")[id];
    console.log(exchangeimg);
    exchangeimg.style.marginTop = "-100%"
    exchangeimg.style.opacity = "1";
}