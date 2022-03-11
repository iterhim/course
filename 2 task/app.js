// @iterhim

// let number = prompt("Введіть число");
let number = prompt();
let arr = [];
for (let i = 0; i <= number; i++) {
    if (i % 5 === 0) {
        arr.push(i);
    }
}
if (arr.length <= 1) {
    alert("Sorry, no numbers");
} else {
    alert(arr);

}
// Не плутай alert та console.log! В завданні сказано вивести в консоль а не модальше вікно

// @vitaliykyq

let number = prompt();
let check = false;

// З 1 а не з 0, тому що 0 і так завжди ділиться на ціло на 5
for (let i = 1; i <= number; i++) {
    if(i % 5 === 0){
        check = true;
        console.log(i);
    }
}

if(!check) console.log("Sorry, no numbers");
