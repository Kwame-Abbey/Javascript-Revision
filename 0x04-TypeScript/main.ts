// interface Student {
//     firstName: string,
//     lastName: string,
//     age: number,
//     location: string
// }

// const stu1 : Student = {
//     firstName: 'Abbey',
//     lastName: 'Kwame',
//     age: 25,
//     location: 'hohoe'
// }

// const stu2 : Student = {
//     firstName: 'Lordina',
//     lastName: 'Eshun',
//     age: 25,
//     location: 'sunyani'
// }

// const array: Student[] = [stu1, stu2];

interface Teacher {
    readonly firstName: string,
    readonly lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience?: number,
    location: string,
    [propName: string]: boolean
}

interface Directors extends Teacher {
    numberOfReports: number
}

interface printTeacherFunction {
    firstName: string,
    lastName: string
}

function printTeacher(params: printTeacherFunction) {
    return `${params.firstName[0]} ${params.lastName}`
}

class StudentClass {
    constructor()
}