class Teacher {
    constructor(id, name, subject) {
        this.id = id,
        this.name = name,
        this.subject = subject
    }

    getTeacherDetails() {
        console.log(`id is: ${this.id}, \nThe teacher name: ${this.name}, \nsubject he handle: ${this.subject}. `)
    }
}

let teacher1 = new Teacher(1, "Venugopal", "DSA")
let teacher2 = new Teacher(2, "Shivani", "CSBT")
let teacher3 = new Teacher(3, "Chandra Sekar", "React")

teacher1.getTeacherDetails()
teacher2.getTeacherDetails()
teacher3.getTeacherDetails()

class Session {
    constructor(id, teacher, name) {
        this.id = id
        this.name = name
        this.teacher = teacher
    }

    getSessionDetails() {
        console.log(`id is: ${this.id}, \nThe Session name: ${this.name}, \nWho handle: ${this.teacher.name}. `)
    }
}

let session1 = new Session(1, teacher1, "Two Pointer")
let session2 = new Session(2, teacher2, "Self Intro")
let session3 = new Session(3, teacher1, "Quick Sort")

session1.getSessionDetails()
session2.getSessionDetails()
session3.getSessionDetails()

let sessions = [session1, session2, session3]

function groupSessionsByTeacher() {
    let groupedSessions = {}
    sessions.map((session) => {
        let teacherName = session.teacher.name
        if(!groupedSessions[teacherName]) {
         groupedSessions[teacherName] = []  
        }

        groupedSessions[teacherName].push(session.name)

    })
    return groupedSessions
}

console.log(groupSessionsByTeacher(sessions))