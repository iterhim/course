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
        firstBtn.classList.add("active");
        secondBtn.classList.remove("active");
        thirdBtn.classList.remove("active");
        fourBtn.classList.remove("active");
        fiveBtn.classList.remove("active");

    });
    secondBtn.addEventListener('click', function () {
        tabsContent.innerHTML = Anivia.outerHTML;
        firstBtn.classList.remove("active");
        secondBtn.classList.add("active");
        thirdBtn.classList.remove("active");
        fourBtn.classList.remove("active");
        fiveBtn.classList.remove("active");
    });
    thirdBtn.addEventListener('click', function () {
        tabsContent.innerHTML = Draven.outerHTML;
        firstBtn.classList.remove("active");
        secondBtn.classList.remove("active");
        thirdBtn.classList.add("active");
        fourBtn.classList.remove("active");
        fiveBtn.classList.remove("active");
    });
    fourBtn.addEventListener('click', function () {
        tabsContent.innerHTML = Garen.outerHTML;
        firstBtn.classList.remove("active");
        secondBtn.classList.remove("active");
        thirdBtn.classList.remove("active");
        fourBtn.classList.add("active");
        fiveBtn.classList.remove("active");
    });
    fiveBtn.addEventListener('click', function () {
        tabsContent.innerHTML = Katarina.outerHTML;
        firstBtn.classList.remove("active");
        secondBtn.classList.remove("active");
        thirdBtn.classList.remove("active");
        fourBtn.classList.remove("active");
        fiveBtn.classList.add("active");
    });


}
app()
