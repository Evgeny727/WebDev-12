// task1
var imgh_1 = document.getElementById("smile-1"),
    imgh_2 = document.getElementById("smile-2");

imgh_1.addEventListener('click', function() {
    imgh_1.style.display = 'none';
    imgh_2.style.display = 'block'
});

imgh_2.addEventListener('click', function() {
    imgh_2.style.display = 'none';
    imgh_1.style.display = 'block'
});

// task2
var friends_list = document.getElementsByClassName("friend-card");
let array = [];
array[0] = {name: "Маша",age: 30,};
array[1] = {name: "Паша",age: 42,};
array[2] = {name: "Саша",age: 19,};
array[3] = {name: "Даша",age: 26,};
array[4] = {name: "Петя",age: 23,};
array[5] = {name: "Вася",age: 15,};

for(let i=0; i< friends_list.length; i++) {
    friends_list[i].addEventListener('click', function() {
        let name = friends_list[i].innerHTML;
        for(let j=0; j<array.length; j++) {
            if (array[j].name === name) {
                friends_list[i].innerHTML = `${array[j].name} отмечает ${array[j].age}-й День рождения`;
                friends_list[i].style.padding = '2em';
            }
        }
    });
}

//task3
var btns = document.getElementsByClassName("btn"),
flags = [true,true,true], cards = document.getElementsByClassName("card-2"),
hide = document.getElementsByClassName("hidden"), 
sqs = document.getElementsByClassName("square");
for(let i=0; i< btns.length; i++) {
    btns[i].addEventListener('click', function() {
        if(flags[i] === true) {
            cards[i].style.height = "700px";
            hide[i].style.background = "none";
            btns[i].innerHTML = "Скрыть";
            btns[i].style.background = "#f53d9b";
            sqs[i].style.background = "#f53d9b";
            sqs[i].style.top = "-10%";
            flags[i] = false;
        }
        else if (flags[i] === false) {
            cards[i].style.height = "500px";
            hide[i].style.background = "linear-gradient(to bottom, transparent,rgba(51, 51, 51, 0.95), rgb(53, 53, 53))";
            btns[i].innerHTML = "Подробнее";
            btns[i].style.background = "aquamarine";
            sqs[i].style.background = "aquamarine";
            sqs[i].style.top = "-15%";
            flags[i] = true;
        }
    });
}

//task4
const container = document.querySelector('.main');
const thumb = container.querySelector('.thumb');

container.addEventListener('mousemove', (event) => {
    const x = event.clientX - (thumb.clientWidth/2);
    thumb.style.left = `${x}px`;
});

//task5
var texts = document.querySelectorAll(".chapter"),
box = document.querySelectorAll(".icon"),
colors = document.querySelectorAll(".color");

for(let i=0; i<box.length; i++) {
    box[i].addEventListener('mouseover', function() {
        colors[i].style.transform = "translateX(100%)";
        texts[i].style.display = "inline";
    });
    box[i].addEventListener('mouseout', function() {
        colors[i].style.transform = "translateX(-100%)";
        texts[i].style.display = "none";
    });
}

//task6
var modal = document.querySelector(".modal-box"),
open_btn = document.querySelector(".open-btn"),
close_btn = document.querySelector(".close-btn"),
reject = document.querySelector(".reject");

let flag_modal = true;

open_btn.addEventListener('click', function() {
    if(flag_modal === true) {
        modal.style.display = "block";
        flag_modal = false;
    }
    else {
        modal.style.opacity = "0";
        modal.style.display = "none";
        flag_modal = true;
    }
});
close_btn.addEventListener('click', function() {
    modal.style.display = "none";
    flag_modal = true;
});
reject.addEventListener('click', function() {
    modal.style.display = "none";
    flag_modal = true;
});

//task7
let anim_btn = document.querySelector(".animation"),
section_5 = document.querySelector("#section-5");

function circle() {
    let amount = 10;
    let i = 0;
    while(i < amount) {
        let element = document.createElement('i');
        let posX = Math.floor(Math.random() * (window.innerWidth - 100));
        let delay = Math.max(Math.random() * -10, -1);
        let duration = Math.random() * 10;
        let size = Math.random() * 20;
        element.style.width = 10 + size + 'px';
        element.style.height = 10 + size + 'px';
        element.style.left = posX + 'px';
        element.style.animationDelay = delay + 's';
        element.style.animationDuration = duration + 's';
        element.style.boxShadow = "0 30px 50px #002";
        section_5.appendChild(element);
        i++;
    }
};

function deleteE() {
    let el = section_5.getElementsByTagName('i');
    for(let i=0;i<20; i++) {
        el[0].remove();
    }
}

let anim_f = false;
anim_btn.addEventListener('click', function() {
    if(anim_f === false) {
        circle();
        anim_f = true;
    }
    else if(anim_f === true) {
        anim_f = false;
        deleteE();
    }
});

//task8
let inp = document.querySelector("#symb-ogr"),
amount = document.querySelector(".amount");
const MAX_SIZE = 16;

inp.onfocus = function() {
    amount.style.color = "#f05454";
}
inp.onblur = function() {
    amount.style.color = "black";
}
inp.oninput = function() {
    let count = this.value.length;
    let nowCount = MAX_SIZE - count;
    amount.innerHTML = "| " + nowCount;
}