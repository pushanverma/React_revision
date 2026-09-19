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
    return `Complete Address is ${this.city} ,${this.state}`;
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
    this.professor = professor;
  }

  // Adding Student

  addStudent(student) {}

  // Assign Professor
  addProfessor(professor) {}

  // get Course Details
  getCourseDetails() {
    console.log(
      `The course ${this.courseName} is taken by ${this.students} and is  taught by ${this.professor}.`,
    );
  }

  // Display Students

  displayStudents() {
    //Looping over  "this.students"
  }
}

// class NotificationService (){

// }

//topic : MAIN CLASSES --->

class Student extends Person {
  constructor(name, age, address, studentId, course) {
    super(name, age);
  }
}

class Professor extends Person {}

class Department {}

class University {}

//topic :  CREATING OBJECTS --->

let s1 = new Student();
