let app = function () {
    let firstBtn = document.getElementById('firstBtn');
    let secondBtn = document.getElementById('secondBtn');
    let thirdBtn = document.getElementById('thirdBtn');
    let fourBtn = document.getElementById('fourBtn');
    let fiveBtn = document.getElementById('fiveBtn');
    let Akali = document.getElementById('Akali');
    let Anivia = document.getElementById('Anivia');
    let Draven = document.getElementById('Draven');
    let Garen = document.getElementById('Garen');
    let Katarina = document.getElementById('Katarina');
    let tabsContent = document.getElementById('tabsContent');
    firstBtn.addEventListener('click', function () {
        tabsContent.innerHTML = Akali.outerHTML;
    });
    secondBtn.addEventListener('click', function () {
        tabsContent.innerHTML = Anivia.outerHTML;
    });
    thirdBtn.addEventListener('click', function () {
        tabsContent.innerHTML = Draven.outerHTML;
    });
    fourBtn.addEventListener('click', function () {
        tabsContent.innerHTML = Garen.outerHTML;
    });
    fiveBtn.addEventListener('click', function () {
        tabsContent.innerHTML = Katarina.outerHTML;
    });


}
app()
