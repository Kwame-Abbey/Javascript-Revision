#!/usr/bin/node
export default function updateStudentGradeByCity(list, city, newGrades) {
    const filteredStud = list.filter(stu => stu.location == city);
    const stuGrade = filteredStud.map(stu => {
        const newStudent = stu;
        newStudent.grade = 'N/A';
        for (const val of newGrades) {
            if (val.studentId === newStudent.id) {
                newStudent['grade'] = val.grade;
            }
        }
            return newStudent;
    })
    return stuGrade;
}