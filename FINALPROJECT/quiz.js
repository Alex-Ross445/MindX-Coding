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
    let question = document.getElementById("question1");
    let question2 = document.getElementById("question2");
    let question3 = document.getElementById("question3");
    let question4 = document.getElementById("question4");
    let question5 = document.getElementById("question5");
    let gain = question.getAttribute("count");
    if(gain == "1") {
        question.style.left = "-100%";
        question2.style.left = "0%";
        question.setAttribute("count","2");
    }else if(gain == "2") {
        question2.style.left = "-100%";
        question3.style.left = "0%";
        question.setAttribute("count","3");
    }else if(gain == "3") {
        question3.style.left = "-100%";
        question4.style.left = "0%";
        question.setAttribute("count","4");
    }else if(gain == "4") {
        question4.style.left = "-100%";
        question5.style.left = "0%";
        question.setAttribute("count","5");
    }else if(gain == "5") {
        question5.style.left = "-100%";
        question1.style.left = "0%";
        question.setAttribute("count","1");
    }
};

function changeleft() {
    let question = document.getElementById("question1");
    let question2 = document.getElementById("question2");
    let question3 = document.getElementById("question3");
    let question4 = document.getElementById("question4");
    let question5 = document.getElementById("question5");
    let gain = question.getAttribute("count");
    if(gain == "1") {
        question1.style.left = "-100%";
        question5.style.left = "0%";
        question.setAttribute("count","5");
    }else if(gain == "5") {
        question5.style.left = "-100%";
        question4.style.left = "0%";
        question.setAttribute("count","4");
    }else if(gain == "4") {
        question4.style.left = "-100%";
        question3.style.left = "0%";
        question.setAttribute("count","3");
    }else if(gain == "3") {
        question3.style.left = "-100%";
        question2.style.left = "0%";
        question.setAttribute("count","2");
    }else if(gain == "2") {
        question2.style.left = "-100%";
        question1.style.left = "0%";
        question.setAttribute("count","1");
    }
};

let count = 0;
let index = 0;

function change_question (iscorrect) {
    index +=1;

    if(iscorrect) {
        count +=1;
    }

    let question = document.getElementById("question1");
    let question2 = document.getElementById("question2");
    let question3 = document.getElementById("question3");
    let question4 = document.getElementById("question4");
    let question5 = document.getElementById("question5");
    let gain = question.getAttribute("count");
    if(gain == "1") {
        question.style.left = "-100%";
        question2.style.left = "0%";
        question.setAttribute("count","2");
    }else if(gain == "2") {
        question2.style.left = "-100%";
        question3.style.left = "0%";
        question.setAttribute("count","3");
    }else if(gain == "3") {
        question3.style.left = "-100%";
        question4.style.left = "0%";
        question.setAttribute("count","4");
    }else if(gain == "4") {
        question4.style.left = "-100%";
        question5.style.left = "0%";
        question.setAttribute("count","5");
    }

    let score = document.getElementById("point");
    if (index == 5) {
        score.innerHTML = count * 10;
    }
};

function check_answer() {
    let answer = document.getElementById("score");
    answer.style.opacity = "1";
    answer.style.width = "100%";
    answer.style.height = "100%";
}

function back() {
    let back = document.getElementById("score");
    back.style.opacity = "0";
    back.style.width = "0%";
    back.style.height = "0%";
}