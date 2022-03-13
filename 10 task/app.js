let app = function () {
    let firstButton = document.getElementById('firstButton');
    let secondButton = document.getElementById('secondButton');
    let firstInput = document.getElementById('firstInput');
    let secondInput = document.getElementById('secondInput');
    let value = 0,val2 = 0;
    firstButton.onclick = function () {
        value += 1;
        if (value % 2 !== 0) {
            firstInput.type = "";
            firstButton.innerHTML = "Скрити пароль"
        }else {
            firstInput.type = "password";
            firstButton.innerHTML = "Показати пароль"
        }
    }
    secondButton.onclick = function () {
        val2 += 1;
        if (val2 % 2 !== 0) {
            secondInput.type = "";
            secondButton.innerHTML = "Скрити пароль"
        }else {
            secondInput.type = "password";
            secondButton.innerHTML = "Показати пароль"
        }
    }
    let lastButton = document.getElementById('lastBtn');
    let div = document.getElementById('lastdiv');
    lastButton.onclick = function (){
        if(firstInput.value === secondInput.value){
            alert('You are welcome')
        }else {
            div.innerHTML = "<div class='lastDiv'>Нужно ввести одинаковые значения</div>";
        }
    }
}
app()
