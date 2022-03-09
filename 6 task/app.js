let filterBy = function (array, type){
    let arr = [];
    for (let i = 0; i < array.length; i++) {
        if(typeof(array[i]) !== type){
            arr.push(array[i])
        }
    }
    console.log(arr)
}
filterBy(['hello', 'world', 23, '23', null], "string")