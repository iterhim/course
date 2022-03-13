console.log("sadasdsa")

let arbtn = document.getElementsByClassName('btn');


document.addEventListener('keypress', (event) => {
    let keyName = event.key;
    console.log(keyName)
    for (let i = 0; i < arbtn.length; i++) {
        let a = arbtn[i].outerText
        if (keyName === arbtn[i].value) {
            console.log(i);
            if (i === 0){
                arbtn[i].classList.add("asr")
                arbtn[1].classList.remove("asr")
                arbtn[2].classList.remove("asr")
                arbtn[3].classList.remove("asr")
                arbtn[4].classList.remove("asr")
                arbtn[5].classList.remove("asr")
                arbtn[6].classList.remove("asr")

            }else if (i === 1){
                arbtn[i].classList.add("asr")
                arbtn[0].classList.remove("asr")
                arbtn[2].classList.remove("asr")
                arbtn[3].classList.remove("asr")
                arbtn[4].classList.remove("asr")
                arbtn[5].classList.remove("asr")
                arbtn[6].classList.remove("asr")
            }else if (i === 2){
                arbtn[i].classList.add("asr")
                arbtn[0].classList.remove("asr")
                arbtn[1].classList.remove("asr")
                arbtn[3].classList.remove("asr")
                arbtn[4].classList.remove("asr")
                arbtn[5].classList.remove("asr")
                arbtn[6].classList.remove("asr")
            }else if (i === 3){
                arbtn[i].classList.add("asr")
                arbtn[0].classList.remove("asr")
                arbtn[1].classList.remove("asr")
                arbtn[2].classList.remove("asr")
                arbtn[4].classList.remove("asr")
                arbtn[5].classList.remove("asr")
                arbtn[6].classList.remove("asr")
            }else if (i === 4){
                arbtn[i].classList.add("asr")
                arbtn[0].classList.remove("asr")
                arbtn[1].classList.remove("asr")
                arbtn[2].classList.remove("asr")
                arbtn[3].classList.remove("asr")
                arbtn[5].classList.remove("asr")
                arbtn[6].classList.remove("asr")
            }else if (i === 5){
                arbtn[i].classList.add("asr")
                arbtn[0].classList.remove("asr")
                arbtn[1].classList.remove("asr")
                arbtn[2].classList.remove("asr")
                arbtn[3].classList.remove("asr")
                arbtn[4].classList.remove("asr")
                arbtn[6].classList.remove("asr")
            }else if (i === 6){
                arbtn[i].classList.add("asr")
                arbtn[0].classList.remove("asr")
                arbtn[1].classList.remove("asr")
                arbtn[2].classList.remove("asr")
                arbtn[3].classList.remove("asr")
                arbtn[4].classList.remove("asr")
                arbtn[5].classList.remove("asr")
            }
        }
    }
});




