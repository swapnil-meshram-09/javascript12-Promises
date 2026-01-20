
const promise = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        let error = true

        if(!error){
            resolve('resolved')
        } else{
            reject('rejected')
        }
    }, 1000)
})




/*

// error = true, Uncaught (in promise) rejected

async function resolving(){
    const response = await promise
    console.log(response);
 
}

*/


async function resolving(){
    try{
        const response = await promise
        console.log(response);
        
        
    } catch(error){
        console.log(`error: ${error}`);
        
    }
}

resolving()