let btn = document.querySelectorAll("button");
let body = document.getElementsByTagName("body");

let ev = 0, y;
if (localStorage.getItem("myKey") === "false") {
    ev = 0
} else {
    ev = 1
}
btn[0].addEventListener("click", function () {
    ev += 1;
    localStorage.setItem("point", `${ev}`);

    if (ev % 2 === 0) {
        y = false;
        localStorage.setItem("myKey", `${y}`);

    } else {
        y = true;
        localStorage.setItem("myKey", `${y}`);

    }
    window.location.reload();
})


let al = localStorage.getItem('myKey');

if (al === "true") {
    btn[0].classList.add("btn");
    body[0].classList.add(`green`);
} else {
    btn[0].classList.remove(`btn`);
    body[0].classList.remove(`green`);
}