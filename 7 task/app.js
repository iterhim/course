let filterBy = function (array) {

    window.onload = function () {
        for (let i = 0; i < array.length; i++) {
            let mySpan = document.createElement("span");
            mySpan.style.color = "brown";
            mySpan.style.display = "flex";
            // mySpan.innerHTML = array[i];
            // alert(typeof array[i])
            if (typeof array[i] === "object") {
                mySpan.innerHTML = "[" + array[i] + "]";
            }else {

                mySpan.innerHTML = array[i];
            }
            document.body.appendChild(mySpan);
        }
        const doubles = array.map((str) => str + " \t");

        let mySpan2 = document.createElement("span");
        mySpan2.style.color = "brown";
        mySpan2.style.display = "flex";
        
        mySpan2.innerHTML = doubles;
        document.body.appendChild(mySpan2);
    }
}

filterBy(['hello', 'world', 'Kiev', 'Kharkiv', ['hello', 'world', 'Kiev', 'Kharkiv', 'Odessa', 'Lviv'], 'Lviv'])

