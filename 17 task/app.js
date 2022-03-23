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

let arr = [], summ = 0;

for (let i = 0; i < 100; i++) {
    let lesson = prompt("Введите урок: ");
    let mark = Number(prompt("Введите оценку: "));

    if (lesson === null || mark === null) break;
    else {
        student.table.lessonName[i] = lesson;
        student.table.mark[i] = mark;
    }
    if (student.table.mark[i] < 4) arr.push(i);
    summ += +student.table.mark[i];
}

let ser = summ / student.table.mark.length;
if (ser > 7) console.log("Студенту назначена стипендия");
if (arr.length === 0) console.log("Студент переведен на следующий курс");
