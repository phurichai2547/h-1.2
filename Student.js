class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.courses = [];
    }

    addCourse(course) {
        if (!course) return null;
        this.courses.unshift(course);
        return course;
    }

    removeCourse(courseName) {
        const index = this.courses.findIndex(course => courseName === course.name);
        if (index !== -1) {
            this.courses.splice(index, 1);
            return true;
        }
        return false;
    }

    getStudentInfo() {
        return {
            name: this.name,
            age: this.age,
            courses: this.courses,
            averageGrade: this.getAverageGrade(),
        };
    }

    isEnrolled(courseName) {
        return this.courses.some(course => course.name === courseName);
    }

    listAllCourses() {
        return this.courses.map(course => `${course.name}: ${course.grade}`);
    }

    getAverageGrade() {
        if (this.courses.length === 0) return 0;
        const totalGrade = this.courses.reduce((total, course) => total + this.gradeToNumber(course.grade), 0);
        return totalGrade / this.courses.length;
    }

    gradeToNumber(grade) {
        switch (grade) {
            case 'A':
                return 4;
            case 'B+':
                return 3.5;
            case 'B':
                return 3;
            case 'C+':
                return 2.5;
            case 'C':
                return 2;
            case 'D+':
                return 1.5;
            case 'D':
                return 1;
            case 'F':
                return 0;
            default:
                return 0;
        }
    }

    getHonorClass() {
        const averageGrade = this.getAverageGrade();
        if (averageGrade >= 3.9) {
            return 'Summa Cum Laude';
        } else if (averageGrade >= 3.7 && averageGrade <= 3.89) {
            return 'Magna Cum Laude';
        } else if (averageGrade >= 3.5 && averageGrade <= 3.69) {
            return 'Cum Laude';
        } else if (averageGrade >= 3.0 && averageGrade <= 3.49) {
            return 'Honorable Mention';
        } else {
            return 'No honors';
        }
    }
}

// Example usage
let stu = new Student("Scott", 17);
stu.addCourse({"name": "Math", "grade": "C"});
stu.addCourse({"name": "Programming", "grade": "A"});
stu.addCourse({"name": "Network", "grade": "C+"});
stu.addCourse({"name": "GenEd", "grade": "C"});

console.log(stu.getAverageGrade());
console.log(stu.listAllCourses());
console.log(stu.removeCourse("GenEd"));
console.log(stu.removeCourse("Network"));
console.log(stu.isEnrolled("Programming"));
console.log(stu.isEnrolled("History"));
console.log(stu.getStudentInfo());
console.log(stu.getHonorClass());
