// let number = prompt("Введіть число");
let a = prompt("Введіть число №1");
let b = prompt("Введіть число №2");
let operation = prompt("Введіть операцію(+, -, *, /)");
let work = function(number, secNumber, operation){
    if (operation === "+" ){
        alert(number + secNumber);
    }else if (operation === "-" ){
        alert(number - secNumber);
    }else if (operation === "*" ){
        alert(number * secNumber);
    }else if (operation === "/" ){
        alert(number / secNumber);
    }
    else {
        alert("Данні введені невірно")
    }
}
work(a, b, operation);
