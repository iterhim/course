// let name = prompt();
// let lname = prompt();

// let createNewUser = function (a, b) {
let createNewUser = function () {
    let newUser = {
        firstName: prompt(),
        lastName: prompt(),
        getLogin: function () {
            let get = this.firstName[0] + this.lastName;
            return(get.toLowerCase());
        }
    }
    newUser.getLogin()
}
createNewUser();
// createNewUser(name, lname);
