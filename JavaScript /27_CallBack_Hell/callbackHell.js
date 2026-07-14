console.log("...Callback Hell file is working ");

// Calling Api with AJAX / XMLHttpRequest

//note: How to Do a XMLHttpRequest / AJAX Request -->
// 1. Loading the url and specifying the request type
// 2. Setting up the response Type
// 3. What do you want when we get the response i.e onLoad
// 4. Finally send the Request

// let xhr = new XMLHttpRequest();
// xhr.open("GET", "https://dummyjson.com/users", true);
// xhr.responseType = "json";
// xhr.onload = () => {
//   console.log(xhr.response.users[0].id, ".....userId of 1st ");
//   let userId = xhr.response.users[0].id;
//   //2nd Request ---
//   let xhr2 = new XMLHttpRequest();
//   xhr2.open("GET", `https://dummyjson.com/users/${userId}/posts`, true);
//   xhr2.responseType = "json";
//   xhr2.onload = () => {
//     console.log(xhr2.response, ".....response of 2nd");
//   };
//   xhr2.send();
// };

// xhr.send();

// The upper code is creating duplication of Code , so making a Function which can do that same thing and make things more easier to understand.

function makeXMLHttpRequest(method, url, callback) {
  let xhr = new XMLHttpRequest();
  xhr.open(method, url, true);
  xhr.responseType = "json";
  xhr.onload = () => {
    // console.log(xhr.response);
    callback(xhr.response);
  };
  xhr.send();
  return xhr.response;
}

//1 . Getting All the Users
//2 . Getting posts done by the User
//3.  Getting the comments of that posts
//4.  Get the first user who commented 


let userId = makeXMLHttpRequest("GET","https://dummyjson.com/users",(usersData) => {
    console.log(usersData.users[0].id, "....userdata 1 ");
    makeXMLHttpRequest("GET",`https://dummyjson.com/users/${usersData.users[0].id}/posts`,(postData) => {
        console.log(postData.posts[0].id, "....postData 2");
        makeXMLHttpRequest("GET",`https://dummyjson.com/posts/${postData.posts[0].id}/comments`,(commentsData) => {
            console.log(commentsData.comments, "....commentsData 3");
            makeXMLHttpRequest("GET",`https://dummyjson.com/users/${commentsData.comments[0].user.id}`,(singleUserData) => {
                console.log(singleUserData, "....singleUserData 4 ");
              },
            );
          },
        ); 
      },
    );
  },
);




