/*
The rest parameter is used to allow a function to take in an unlimited number of
arguments and assign them to an array in that function. 
*/

const myFunction = (...args) => {
    args.forEach(arg => {
        console.log(arg)
    })

}

myFunction('apple', 'orange', 'pear');