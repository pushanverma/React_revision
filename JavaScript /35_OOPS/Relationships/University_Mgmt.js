// Concepts ->
// 1. Class and Objects
// 2. Inheritance (this and super keyword )
// 3. Polymorphism
// 4. Getter and Setter Functions
// 5. static keyword
// 6.

// Person is a base class

//topic: BASE CLASSES -->

// note: There will be a lot of Person in University (Person can be a Student / Professor / Staff)

class Person {
  // Private Property
  #age;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Getter Function
  get age() {
    console.log("Age of person is ->", this.#age);
  }

  // Setter Function
  set age(value) {
    if (age < 0) {
      console.log("Age cant be negative.");
      return;
    }

    this.#age = value;
  }

  // Normal Method
  introduce() {
    console.log(`Hello my name is ${this.name} and my age is ${this.#age}`);
  }
}

//note:  Student "has-a" Address (has-a - Aggregartion(Weak Relationship )  / Composition(Strong Relationship) )

class Address {
  constructor(state, city) {
    this.state = state;
    this.city = city;
  }

  getAddress() {
    return `Complete Address is -> ${this.city} ,${this.state}`;
  }
}

// let p = new Person("Pushan Verma" , 26);
// let address = new Person("New York", "Manhattan");

//note: Course is associated with both Students and Professors ( Association )

class Course {
  constructor(courseName, courseCode) {
    this.courseName = courseName;
    this.courseCode = courseCode;

    // list of students that are enrolled in the course
    this.students = [];

    // Professor who will be teaching the course
    this.professor = null;
  }

  // Adding Student

  addStudent(student) {
    console.log(
      `....Adding Student - ${student} to course - ${this.courseName}`,
    );
    this.students.push(student);
  }

  // Assign Professor
  addProfessor(professor) {
    console.log(
      `...Adding Professor - ${professor} to the course - ${this.courseName}`,
    );
    this.professor = professor;
  }

  // get Course Details
  getCourseDetails() {
    console.log(
      `The course ${this.courseName} is taken by ${this.students} and is  taught by ${this.professor}.`,
    );
  }

  // Display Students

  displayStudents() {
    //Looping over  "this.students"
    this.students.forEach((student) => {
      console.log(student);
    });
  }
}

class NotificationService {
  sendMessage(msg) {
    console.log(`Notification - ${msg}`);
  }
}

//topic : MAIN CLASSES --->

class Student extends Person {
  constructor(name, age, address, studentId, course, notificationService) {
    super(name, age); // From Person class
    this.studentId = studentId; // Student "has-a" studentId
    this.address = address; // Student "has-a" address
    this.courses = []; // a student "has-a" lot of courses.
    this.notificationService = notificationService; // Student uses temporarily notificationService
  }

  // Method OverRiding (part of Polymorphism - Poly means many , morph - means forms - many forms of the same function i.e introduce ) ->
  introduce() {
    super.introduce(this.name, this.age);
    console.log(` and i am a student with student id - ${this.studentId}`);
  }

  // enrollCourse()- Students "Associates" with the course

  enroll(course) {
    // Adding the course to the courseList of Student
    this.courses.push(course);

    // Adding the Student to the course
    course.addStudent(this);

    console.log(`Adding the ${this.name} to the course - ${course}`);
  }

  // ShowCourses - list all the enrolled courses of Student

  showCourses() {
    this.courses.forEach((course) => {
      console.log(`Course ->  ${course}`);
    });
  }

  // Notification
  notify() {
    this.notificationService.sendMessage(
      `${this.name} you have been registered in the University.`,
    );
  }
}

class Professor extends Person {
  constructor(name, age, employeeId) {
    super(name, age);
    this.employeeId = employeeId;
  }

  // Method OverRiding (PolyMorphism)
  introduce() {
    super.introduce(this.name, this.age);
    console.log(`and I am a employee with the id - ${this.employeeId}`);
  }

  // Professor Teaches the Course()
  teachCourse(course) {
    course.addProfessor(this);
  }
}

// Department contains both Professor and Courses
class Department {
  constructor(deptName, professors = []) {
    //Department name
    this.deptName = deptName;

    // Department will have Course (it can have multiple Courses)
    this.courses = [];

    // Department will also have Professors(it can have multiple Professors )
    this.professors = professors;
  }

  //addProfessor

  addProfessor(professor) {
    console.log(`...Adding ${professor} to deparment - {this.deptName}`);
    this.professors.push(professor);
  }

  // showProfessor

  showProfessor() {
    this.professors.forEach((prof) => {
      console.log(`Professor - ${prof}`);
    });
  }

  // Add courses
  addCourse(course) {
    console.log(`Adding course ${course} to ${this.deptName}`);
    this.courses.push(course);
  }

  // Show Courses

  showCourses() {
    this.courses.forEach((crs) => {
      console.log(`Course -  ${crs}`);
    });
  }
}

class University {

  constructor(universityName) {
    this.universityName = universityName;
    this.departments = [];
  }

  // Add Department-->
  addDepartmentinUniversity(dept) {
    console.log(`...Adding ${dept} to ${this.universityName}`);
    this.departments.push(dept);
  }

  // Show Department-->
  showDepartmentinUniversity() {
    this.departments.forEach((dept) => {
      console.log(`Dept - ${dept}`);
    });
  }

}

//topic :  CREATING OBJECTS --->


