let filterBy = function (arr) {

    const firstList = function (array) {
        let result = "<ul>";
        array.map((str) =>
            result += `<li>${str}</li>`
        );
        result += "</ul>";
        return result;
    }

    const listHTML = document.getElementById("asd");
    arr.map(element => {
        if(typeof element === "object"){
            listHTML.innerHTML += firstList(arr);
        }else{
            listHTML.innerHTML += `<li>${element}</li>`;
        }

    });
}

filterBy(['hello', 'world', ['hello', 'world', 'Kiev', 'Kharkiv', 'Odessa', 'Lviv'], 'Kiev', 'Kharkiv', ['hello', 'world', 'Kiev', 'Kharkiv', 'Odessa', 'Lviv'], 'Lviv'])
