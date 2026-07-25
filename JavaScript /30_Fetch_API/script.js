console.log("...script file for Fetch API ");

fetch("https://dummyjson.com/products").then((response)=>{
  console.log(response.json(),"....response inside fecth_api");
})








