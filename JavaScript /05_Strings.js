let name = "pushan";
let repoCount = 74;

// topic: String Interpolation (using backtick to include dynamic details )
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

//topic: String concatenation
let a = "pushan";
let b = "verma";
let c = a + b;

// console.log(c);

//topic: Another way to declare String through class-object method
let studentName = new String("pushanverma");
// console.log(studentName);

//note:if you run the above code in browser then , String method saves as Object(Key-value pair) not as character array , they store in the form of sequence
console.log(studentName[1]);

//topic: methods in String(methods does not change the original value)

//toUpperCase()
console.log(studentName.toUpperCase());

//charAt(character)
console.log(studentName.indexOf("v"));
console.log(studentName.indexOf("t"));

//substring(start,end)
let newValue1 = studentName.substring(0, 4);
console.log(newValue1, "....substring");

//slice(start,end) - can be -ve values also
let newValue2 = studentName.slice(0, 4);
console.log(newValue2, "....slice");

//trim (trims the white spaces)
let text1 = "      pushan      ";
console.log(text1.trim(), ".....trim");

//replace 
const url = "https:github.com/pushan%20verma";
console.log(url.replace("%20", "-"));



