// Concepts ->
// 1. Class and Objects
// 2. Inheritance (this and super keyword )
// 3. Polymorphism
// 4. Getter and Setter Functions
// 5. static keyword
// 6.

// Person is a base class

//topic: ------------------------------BASE CLASSES---------------------------------------

// note: There will be a lot of Person in University (Person can be a Student / Professor / Staff)

class Person {
  // Private Property
  #age;

  constructor(name, age) {
    this.name = name;
    this.#age = age;
  }

  // Getter Function
  get age() {
    console.log("Age of person is ->", this.#age);
  }

  // Setter Function
  set age(value) {
    if (this.#age < 0) {
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
  constructor(city, state) {
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
      `....Adding Student - ${student.name} to course - ${this.courseName}`,
    );
    this.students.push(student);
  }

  // Assign Professor
  addProfessor(professor) {
    console.log(
      `...Adding Professor - ${professor.name} to the course - ${this.courseName}`,
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

//topic : ------------------------MAIN CLASSES -------------------------------------->

class Student extends Person {
  constructor(name, age, address, studentId, notificationService) {
    super(name, age); // From Person class
    this.studentId = studentId; // Student "has-a" studentId
    this.address = address; // Student "has-a" address
    this.courses = []; // a student "has-a" lot of courses.
    this.notificationService = notificationService; // Student uses temporarily notificationService
  }
  // Introduce , Enroll , showCourses , notify,

  // Method OverRiding (part of Polymorphism - Poly means many , morph - means forms - many forms of the same function i.e introduce ) ->
  introduce() {
    super.introduce(this.name, this.age);
    console.log(` and i am a student with student id - ${this.studentId}`);
  }

  // enrollCourse()- Students "Associates" with the course

  enroll(course) {
    // Adding the course to the courseList of Student
    // console.log("Adding the course to the courseList of Student.......1");
    this.courses.push(course);

    // Adding the Student to the course
    // console.log("Adding the Student to the course.......2");
    course.addStudent(this);

    //Finally Enrolled
    console.log(`Adding the ${this.name} to the course - ${course.courseName}`);
  }

  // ShowCourses - list all the enrolled courses of Student

  showCourses() {
    this.courses.forEach((crs) => {
      console.log(`Course ->  ${crs.courseName}`);
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
    console.log(`...Adding ${professor.name} to deparment - ${this.deptName}`);
    this.professors.push(professor);
  }

  // showProfessor
  showProfessor() {
    this.professors.forEach((prof) => {
      console.log(`Professor - ${prof.name}`);
    });
  }

  // Add courses
  addCourse(course) {
    console.log(`Adding course ${course.courseName} to ${this.deptName}`);
    this.courses.push(course);
  }

  // Show Courses

  showCourses() {
    this.courses.forEach((crs) => {
      console.log(`Course -  ${crs.courseName}`);
    });
  }
}

class University {
  constructor(universityName) {
    this.universityName = universityName;
    this.departments = [];
  }

  static {
    // Properties
    let total_no_of_prof = 100;

    let university_area = "1000 Acres";

    let establishment_year = 1964;

    let total_dept = [
      "Psychology",
      "Computer Science",
      "Liberal Arts",
      "Music",
      "Business",
    ];

    //Methods
    this.getUniversityDetails = function () {
      let area = `This University ${this.universityName} is locted in ${university_area}`;
      let establishment = `and is established in ${establishment_year}`;
      let education = ` and has a total of ${total_no_of_prof} `;

      return (
        area +
        establishment +
        education +
        "and has departments ->" +
        total_dept.join(" , ")
      );
    };
  }

  // Add Department-->
  addDepartmentinUniversity(dept) {
    console.log(`...Adding ${dept.deptName} to ${this.universityName}`);
    this.departments.push(dept);
  }

  // Show Department-->
  showDepartmentinUniversity() {
    this.departments.forEach((dept) => {
      console.log(`Dept - ${dept}`);
    });
  }

  displayUniversityDetails() {
    console.log(University.getUniversityDetails());
  }
}

//topic : --------------------------- CREATING OBJECTS -------------------------->

//Creating  address
let address_1 = new Address("Manhattan", "New York");

console.log(address_1.getAddress(), ".....getting Address");
console.log("--------------------------------------------");

//Creating Notification Service
let notificationService = new NotificationService();
console.log(notificationService.sendMessage("Bhosdk Padhle"), ".....Message ");
console.log("--------------------------------------------");

//Creating Student
// constructor(name, age, address, studentId,notificationService) {
let student_1 = new Student(
  "Pushan Verma",
  26,
  address_1,
  "S-2599",
  notificationService,
);

// introduce , enroll , showCourse , notify
student_1.introduce();
console.log("-----------------------------------------------");

//Creating one course
let operatingSystem = new Course("Operating Systems", "CS-531");

student_1.enroll(operatingSystem);
console.log("--------------------------------------------");

//Adding one more course
let machineLearning = new Course("Machine Learning", "OCS-3455");
student_1.enroll(machineLearning);

let deepLearning = new Course("Deep Learning", "CS-5432");
student_1.enroll(deepLearning);

student_1.showCourses();
console.log("--------------------------------------------");

student_1.notify();

console.log("************************************************");

// Creating Professor
// Professor can exist before the University / After the University / Outside the University
// Important for understanding the Aggregation.

let professor_1 = new Professor("Haytham Idriss", 45, "P-01");
let professor_2 = new Professor("Jay Johns", 38, "P-05");
let professor_3 = new Professor("Anshuman Misra", 32, "P-07");

// introduce and teachCourse
professor_1.introduce();

professor_1.teachCourse(operatingSystem);

// Creating Course

console.log("************************************************");

// Creating Department ->
let compSciDept = new Department("Computer Science ", [
  professor_1,
  professor_2,
  professor_3,
]);

//addProfessor , addCourse , showProfessor , showCourse

compSciDept.showProfessor();

compSciDept.showCourses();

// addProfessor(professor) {
//     console.log(`...Adding ${professor} to deparment - {this.deptName}`);
//     this.professors.push(professor);
//   }

let professor_4 = new Professor("Zensheng Chen", 38, "P-02");

compSciDept.addProfessor(professor_4);

console.log("************************************************");

// Creating Departments ->

// Creating two depts - Comp science and Psychology

let dept_1 = new Department("Computer Science", [
  professor_1,
  professor_2,
  professor_3,
  professor_4,
]);

let professor_5 = new Professor("Anshuman Misra", 33, "P-89");

dept_1.addProfessor(professor_5); // adding a new Professor
dept_1.showProfessor(); // display all the professor

dept_1.addCourse(machineLearning);
dept_1.addCourse(deepLearning);
dept_1.addCourse(operatingSystem);

dept_1.showCourses(); // display all the courses

//Dept - 2
//Psychology Professors->
console.log("....Psychology Department --->");

let dept_2 = new Department("Psychology", []);

//Making Professor
let professor_6 = new Professor("Pushan Verma", 26, "P-11");
let professor_7 = new Professor("Varun Teja", 38, "P-12");

dept_2.addProfessor(professor_6); // adding professor in dept 2
dept_2.addProfessor(professor_7); // adding professor in dept 2

dept_2.showProfessor(); // display all the proferssor in Pyschology Dept

//Adding the Course
let human_psychology = new Course("Human Psychology", "PSC-001");
let animal_psychology = new Course("Animal Psychology", "PSC-002");

dept_2.addCourse(human_psychology);
dept_2.addCourse(animal_psychology);

dept_2.showCourses();

console.log("************************************************");

//Creating University ->
let university_1 = new University("Purdue University");

// Adding Department in the University
university_1.addDepartmentinUniversity(dept_1);
university_1.addDepartmentinUniversity(dept_2);


university_1.displayUniversityDetails();

