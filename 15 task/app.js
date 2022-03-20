let factorial = function (n) {

    let step = 0, end = 1;
    let work = function () {
        step++;
        if (n > 1 && step <= n) {

            end *= step
            work();
        }else if (n === 1) {
            end = 0;
            console.log(end)
        }else if (step === n + 1) {
            console.log(end)
        }
        else {
            console.log("введіть додатнє ціле число значення!!!")
        }
    }
    work()

}
factorial(+(prompt("факторіал якого числа хочете порахувати")));
