console.log("sadasdsa")

let arbtn = document.getElementsByClassName('btn');


document.addEventListener('keypress', (event) => {
    let keyName = event.key;
    let del = function () {
        arbtn[0].classList.remove("asr")
        arbtn[1].classList.remove("asr")
        arbtn[2].classList.remove("asr")
        arbtn[3].classList.remove("asr")
        arbtn[4].classList.remove("asr")
        arbtn[5].classList.remove("asr")
        arbtn[6].classList.remove("asr")
    };
    for (let i = 0; i < arbtn.length; i++) {
        let a = arbtn[i].outerText

        if (keyName === arbtn[i].value) {
            switch (i) {
                case 0:
                    del();
                    arbtn[0].classList.add("asr");
                    break;
                case 1:
                    del();
                    arbtn[1].classList.add("asr");
                    break;
                case 2:
                    del();
                    arbtn[2].classList.add("asr");
                    break;
                case 3:
                    del();
                    arbtn[3].classList.add("asr");
                    break;
                case 4:
                    del();
                    arbtn[4].classList.add("asr");
                    break;
                case 5:
                    del();
                    arbtn[5].classList.add("asr");
                    break;
                case 6:
                    del();
                    arbtn[6].classList.add("asr");
                    break;
            }
        }


    }
});




