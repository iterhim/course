function fibonacci(n) {
        if((n === 1) || (n === -1)){
            return 1;
        }
        if(n === 0){
            return 0;
        }
        if(n < 0){
            return Math.pow(-1,n+1) * fibonacci(Math.abs(n));
        }
        else{
            return fibonacci(n - 1) + fibonacci(n - 2);
        }
}

console.log(fibonacci(+(prompt("числo фібоначі якого числа хочете порахувати"))))
