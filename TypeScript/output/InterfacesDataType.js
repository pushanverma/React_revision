"use strict";
//note:Interface is a way to define the structure of object , Function etc. Basically ,defnining the Object definition single type and then
Object.defineProperty(exports, "__esModule", { value: true });
//note: Including every type of Data Type in Interface (Number , String , Boolean , Array , Object )
let university_name = "Purdue University";
//topic: Function that is declared inside Interface --------------------------------->
function university_Details_Fn(student_name, student_object) {
    let university_address = "Indiana, USA";
    let university_program = "Ms in Computer Science";
    //student_name key from the object below
    console.log(`Hello my name is ${student_name} and my age is ${student_object?.age} , my email id is ${student_object?.email_id} `);
    console.log(student_object, "...whole object coming from below ");
    //note: from local variables and global variables defined in this function
    console.log("I am studying in " +
        university_name +
        " which is located at " +
        university_address +
        ", and i am studying " +
        university_program);
}
let frontent_array = ["HTML", "CSS", "JS", "REACTJS", "TS"];
let backend_array = ["Nodejs", "Database", "API"];
//note: Building a Object which follows the interface
var studentObject = {
    student_name: "Pushan Verma",
    age: 25,
    email_id: "pushanverma.99@gmail.com",
    is_married: false,
    intrest: ["Problem Solving ", "Music ", "Sports"],
    tech_stack: {
        frontend: frontent_array,
        backend: backend_array,
    },
    university_Details: university_Details_Fn,
};
studentObject.university_Details(studentObject.student_name, studentObject);
function VehicleDetails(myvehicle) {
    console.log(myvehicle, "....1");
    // console.log(myvehicle?.vehicle_brand);
}
let myCar = {
    vehicle_brand: "Mercedez",
    vehicle_model: "MayBach",
    vehicle_year: 2026,
    vehicle_color: "Black and Gold",
    vehicle_price: 10000000,
    isElectric: false,
    numberofDoors: 4,
    hasSunRoof: true,
};
VehicleDetails(myCar);
//# sourceMappingURL=InterfacesDataType.js.map