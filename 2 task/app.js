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




