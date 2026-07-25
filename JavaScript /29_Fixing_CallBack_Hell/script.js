console.log(".....Fixing Callback Hell");

function makeHttpRequest(method, url) {
  let xhr = new XMLHttpRequest();
  xhr.responseType = "json";

  let promise = new Promise((resolve, reject) => {
    xhr.addEventListener("load", () => {
      resolve(xhr.response);
    });
  });

  xhr.open(method, url);
  xhr.send();

  return promise;
}

//1 . Getting All the Users
//2 . Getting posts done by the User
//3.  Getting the comments of that posts
//4.  Get the first user who commented

const baseUrl = "https://dummyjson.com";

let ans = makeHttpRequest("GET",`${baseUrl}/users`)
.then( (usersData) => { return makeHttpRequest( "GET",`${baseUrl}/users/${usersData.users[0].id}/posts`)
  .then( (postData) => { return  makeHttpRequest("GET",`${baseUrl}/posts/${postData.posts[0].id}/comments`)})
  .then ((commentsData)=>{ return makeHttpRequest("GET", `${baseUrl}/users/${commentsData.comments[0].user.id}`) })
}).catch((error)=>{
    console.log("......Error");
}).finally(()=>{
    console.log(".....finally ");  
})

console.log(ans,"...ans  ");


