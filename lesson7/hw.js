function check() {
    let checkheight = document.getElementById("height");
    let checkweight = document.getElementById("weight");
    if(checkheight.value < 0, checkweight.value < 0) {
        alert("Hãy nhập đúng số liệu")
    };

    let inheight = document.getElementById("inheight");
    inheight.innerHTML = checkheight.value/100 + "m";
    let inweight = document.getElementById("inweight");
    inweight.innerHTML = checkweight.value + "kg";

    let bmi = document.getElementById("bmi");
    bmi.innerHTML = checkweight.value/(checkheight.value*checkheight.value)*10000;

    let sum = document.getElementById("sum");
    if(bmi.innerHTML < 18.5) {
        sum.innerHTML = "Gầy";
    }else if(bmi.innerHTML >= 18.5, bmi.innerHTML < 24.9) {
        sum.innerHTML = "Bình thường";
    }else if(bmi.innerHTML >=24.9, bmi.innerHTML <= 24.9) {
        sum.innerHTML = "Thừa cân";
    }else if (bmi.innerHTML > 25, bmi.innerHTML <= 29.9) {
        sum.innerHTML = "Tiền béo phì";
    }else if(bmi.innerHTML > 30, bmi.innerHTML <= 34.9) {
        sum.innerHTML = "Béo phì độ I";
    }else if(bmi.innerHTML > 35,bmi.innerHTML <= 39.9) {
        sum.innerHTML = "Béo phì độ II";
    }else if(bmi.innerHTML >= 40) {
        sum.innerHTML = "Béo phì độ III";
    }
};