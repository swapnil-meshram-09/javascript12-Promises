
const promise = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        let error = false

        if(!error){
            resolve('resolved')
        } else{
            reject('rejected')
        }
    }, 1000)
})


