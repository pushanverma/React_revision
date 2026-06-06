const xhr = new XMLHttpRequest();
 
xhr.responseType="json";

xhr.onload = () => {
  console.log(xhr.response, "...data on load");
};

xhr.open("GET", "https://dummyjson.com/users");
xhr.send();

//1 . User 
//2. posts 
//3. 

