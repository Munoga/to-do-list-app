const promise = new Promise ((resolve, reject) => {
    const number = 10
    if (number >= 11){
        resolve("Number above 10")
    } else{
        reject("Number less than 10")
    }
})

promise.then(result => {
    console.log("Passes")
})
.catch(error => {
    console.log(error)
})