var studentList = [{ name: "Amit" },{ Rollno: 80075 },{ Phoneno: 12345544321 },{ Department: "EnTC" },{ Hobbies: ["Trekking", "Web Series"]}]
for (const key in studentList) {
    var stud = studentList[key];
    if (stud instanceof Array) {
        stud.forEach((element) => { console.log(key + " :" + element) })
    } else if (typeof(stud) == "object") {
        for (const key in stud) {
            console.log(key + " : " + stud[key]);
        }
    } else
        console.log(key + " :" + stud);

}