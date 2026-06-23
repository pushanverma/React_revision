//note: Declaration of Object Data Type

//note: IF you are sure , no more Keys gonna come up -----
var userData: { name: string; age: number; company: undefined | string } = {
  name: "Pushan",
  age: 26,
  company: undefined,
};

userData.name = "Pushan Verma";
console.log(userData, "...userData object in Ts ");

// adding a new key to Object
//method 1 : Defining a variable beforehand and treating it undefined and later updating the value
userData.company = "Amazon";
console.log(userData, "...userData after adding new Key ");

//method 2: But what if some new keys are introduced at random (eg. city , education, address  etc.) in that case it will be difficult to handle the keys everytime . 
var random_userData: {
  [key: string]: string | number | boolean | undefined | object;
} = {};

random_userData.name = "Chandresh Verma";
random_userData.age = 21;
random_userData.company = "Amazon";
random_userData.city = "Delhi";
random_userData.education = "BBA LLB";
random_userData.address = {
  complete_address: "G4 , Bm Roahatgi appt , 1-ram kishore road , civil lines ",
  city: "Delhi",
  pincode: 110054,
};

console.log(random_userData,"...random_userData after addding all the details");


//note: 2nd method

//note: Nested Object Data Type
