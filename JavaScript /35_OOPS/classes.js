// note: ClassName starting letter should be capitalised.

class CreateUser {
  // Adding variable salary (making it private )

  // note: Private Variable
  #salary;

  //note: Static Properties
  //   static company = "Google";

  // Constructor method
  constructor(firstName, lastName, age, salary) {
    console.log(this, "....this ");

    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.#salary = salary; 
  }

  // Methods
  getBirthYear() {
    let date = new Date();
    let year = date.getFullYear();
    return year - this.age;
  }

  getFullName() {
    return this.firstName + " " + this.lastName;
  }

  getTax() {
    console.log(`Salary of user ${this.firstName} is ${this.#salary}`);
    let tax = this.#salary * 0.18;
    return tax;
  }

  // note: Private Method
  #getBonus() {
    let bonus = this.#salary + 1000;
    console.log(bonus, `....Bonus of User ${this.firstName}`);

    return bonus;
  }

  //note: Static Method
  //   static getCompanyDetails() {
  //     console.log("Company ->", this.company);
  //   }

  //note: Static Block

  static {
    console.log(this, "......this inside the static Block "); // Pointing to the entire Class

    this.company = "Google";
    this.getCompanyDetails = function () {
      console.log("Company ->", this.company);
    };
  }

  getAnyFunction(functionName) {
    switch (functionName) {
      case "getBirthYear":
        this.getBirthYear();
        break;
      case "getFullName":
        this.getFullName();
        break;

      case "getTax":
        this.getTax();
        break;
      case "getBonus":
        this.#getBonus();
        break;
      default:
        console.log("No function found , thanks");
        break;
    }
  }
}

console.log(CreateUser, "....class");
console.log(typeof CreateUser, "...type of Class - will be a Function ");
console.dir(CreateUser, "...Class in a object form");

let user1 = new CreateUser("Pushan", "Verma", 26, 2000);
let user2 = new CreateUser("Chandra", "Vamshi", 27, 5000);

console.log(user1.getBirthYear(), "....user1 getBirthYear");
console.log(user2.getFullName(), "......user2 getFullName");

console.log(user1.getTax(), "....Tax of user1");
console.log(user2.getTax(), ".....Tax of user2");

// Calling Private methods present inside the class (You cant call them directly)
// console.log(user1.#getBonus(),"...getBonus");  --- Keep this commented

// private methods can only called via other methods.

user1.getAnyFunction("getBonus");

//checking if the static Properties applies on objects or not

console.log(user1.company, ".... Accessing company from Object"); // Not Accessible
console.log(CreateUser.company, "...Accessing company from Class"); // Accessible

console.log(CreateUser.getCompanyDetails(), ".......getCompanyDetails");

console.dir(CreateUser); // static method getCompanyDetails has been added here.
