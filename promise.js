
const promise1 = new Promise((resolve,reject) => {

    // resolve("this is resolve");           // asynchronous steps

    reject("this is reject");

    console.log('testing...');           // first execution then resolve executed.
    
})

console.log(promise1);                     // no resolve, no reject = promise { <pending> }

// console.log(typeof(promise1));          // object




promise1.then((res) =>{

   console.log(res);
    
})

promise1.catch((err) =>{

    console.log(err);
    
})

promise1.finally(()=>{
    console.log('executing..');
    
})











