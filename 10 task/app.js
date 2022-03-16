let app = function () {
    let btn = document.querySelectorAll('button');
    let inp = document.querySelectorAll('input');

    let value = 0;
    for (let i = 0; i < inp.length; i++) {
        btn[i].onclick = function () {
            value += 1;
            if (value % 2 !== 0) {
                inp[i].type = "";
                btn[i].innerHTML = "Скрити пароль"
            }else {
                inp[i].type = "password";
                btn[i].innerHTML = "Показати пароль"
            }
        }
    }
    let div = document.getElementById('lastdiv');
    btn[2].onclick = function (){
        if(inp[0].value === inp[1].value){
            alert('You are welcome')
        }else {
            div.innerHTML = "<div class='lastDiv'>Нужно ввести одинаковые значения</div>";
        }
    }
}
app()
