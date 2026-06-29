//Understanding the Core Differences b/w Interfaces and Types

// Interfaces Allows to Extend and Types do not allow

interface a {
  name: string
}
interface b  {
  email_id: string 
}

interface c extends b,a {
    phone_number:number
}

var studentObject : c = {
    name :"Pushan Verma",
    email_id:"pushanverma.99@gmail.com",
    phone_number: 2604101345
}

console.log(studentObject.name ,"....student name");
console.log(studentObject.phone_number,"....phone number");


// Whereas Types allows to Union whereas Interfaces do not allow

type aType ={ name : string };
type bType ={email_id : string };
type cType = aType | bType;

var employeeObject : cType ={ 
    email_id :"pushanverma.99@gmail.com"
}

console.log(employeeObject.email_id,".....email_id");









