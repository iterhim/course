let app = function () {
    let tabs = document.querySelector("#tabsContent")
    let btn = document.querySelectorAll('.tabs-title');
    let text = document.querySelectorAll('.text');

    function add0() {
        for (let i = 0; i < btn.length; i++) {

            btn[i].classList.remove("active");
        }
    }
    for (let j = 0; j < btn.length; j++) {
        btn[j].addEventListener('click', function () {
            tabs.innerHTML = text[j].outerHTML;
            add0()
            btn[j].classList.add("active");
        });
    }

}
app()
