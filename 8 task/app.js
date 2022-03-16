let func = function (){

    let first = document.getElementById('lists');
    let second = document.getElementById('asd');
    if(onmouseout === null){
        if(second.value <= 0){
            first.innerHTML = "<h6 class='last'>'Please enter correct price '</h6> ";
            document.querySelector('#asd').classList.add('myClass');
            second.value = "";
        }else{
            document.querySelector('#asd').classList.remove('myClass');
            first.innerHTML = `<div class="out">Текущая цена: ${second.value} <button id="butt">||X||</button></div> `;
            second.value = "";
        }
    }
    let third = document.getElementById('butt');
    third.addEventListener('click', function() {
        first.innerHTML = ""
    });


}



