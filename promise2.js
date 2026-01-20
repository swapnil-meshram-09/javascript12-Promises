
const promise = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        // console.log('Promises');
        resolve('resolved')
    }, 1000)
})

// console.log(promise);      // promise with pending state

// console.log(typeof promise);       // object

promise
.then((response) =>{
    console.log(response);
    
})
.catch((error) =>{
    console.log(error);
    
})
