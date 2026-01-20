
const promise = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        // console.log('Promises');
        
        //resolve('resolved')

        //reject('rejected')

        let error = false 

        if(!error){
            resolve('resolved')
        } else{
            reject('rejected')
        }
        
    }, 1000)
})

// console.log(promise);      // promise with pending state

// console.log(typeof promise);       // object

promise
.then((response) =>{
    console.log(response);
    
})
.catch((error) =>{
    console.log('error: ',error);
    
})
