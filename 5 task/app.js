
let createNewUser = function () {
    let newUser = {
        firstName: prompt("Введіть ім'я"),
        lastName: prompt("Введіть прізвище"),
        birthday: prompt("Введіть дату в форматі (yyyy.mm.dd)"),
        getLogin: function () {
            let getLoginn = this.firstName[0] + this.lastName;
            console.log(getLoginn.toLowerCase());
            return getLoginn
        },
        birthdayToDate: new Date(this.birthday),
        getAge: function (){
            let now = new Date();
            let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
            let dob = new Date(this.birthday);
            let dobnow = new Date(today.getFullYear(), dob.getMonth(), dob.getDate());
            let age; //Возраст

            age = today.getFullYear() - dob.getFullYear();
            if (today < dobnow) {
                age = age-1;
            }
            console.log(age)
        },
        getPassword: function (){
            let getPassword = this.firstName[0].toUpperCase() + this.lastName + this.birthday[0] + this.birthday[1] + this.birthday[2] + this.birthday[3];
            console.log(getPassword)
        }
    }
    newUser.getLogin();
    console.log(newUser.birthday);
    newUser.getAge();
    newUser.getPassword();

}
createNewUser();
