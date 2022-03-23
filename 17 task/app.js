let student = {
    //  НЕОБОВ'ЯЗКОВО
    // name,
    // lastName
    table: {
        lessonName: [],
        mark: []
    }
}
student.name = prompt("your name: ");
student.lastName = prompt("your surname: ");

let lesson = "", mark = "", arr = [], summ = 0, index = 0;

while(true) {
    let lesson = prompt("Введите урок: ");
    let mark = +prompt("Введите оценку: ");

    if (lesson === null || mark == null) break;
    else {
        student.table.lessonName[index] = lesson;
        student.table.mark[index] =  mark;
    }
    if (student.table.mark[index] < 4) arr.push(index);
    summ += +student.table.mark[index];
    index++;
}

let ser = summ / student.table.mark.length;
if (ser > 7) console.log("Студенту назначена стипендия");
if (arr.length === 0) console.log("Студент переведен на следующий курс");
