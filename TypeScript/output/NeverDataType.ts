
//1. Loop function 

function loopfunction() : never{
    while(true){
        console.log("Loop Function ");
        
    }    
}

//2. loopfunction();


// Simple function 

function simpleFunction() {
    console.log("...Simple Function ");   
}


//3. Function giving Errors

function ErrorFunction() : never {
    throw console.error("Error ");  
}

