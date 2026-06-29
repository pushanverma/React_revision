// note: Intersection is combining of data Type of 2 different variables into one .

type personTypeA = { student_name: string };
type personTypeB = { student_age: number };

type personTypeC = personTypeA & personTypeB;

var personDataA: personTypeA = { student_name: "Pushan Verma" };
var personDataB: personTypeB = { student_age: 99 };
var personDataC: personTypeC = {
  student_name: "Pushan Ramesh Verma ",
  student_age: 30,
};












