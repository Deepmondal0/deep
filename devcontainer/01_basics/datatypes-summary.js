// primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt


// const score = 100
// const scoreValue = 100.3

// const isLoggedin = false
// const outsideTem = null
// let userEmail; = undefined

// const id = symbol("111")
// const anotherId = Symbol("111")

// console.log(id === anotherId);


// Reference (Non primitive )

//Array, Object, Functions

//***********************************************************************

// memory two types : Stack(primitive) , Heap(non primitive)

let myName = "DeepMondal"

let anotherName = myName
anotherName = "sagar"
console.log(anotherName);
console.log(myName);

let userone ={
    email: "dmsaratnagar@gmail.com",
    upi: "user@ybl"

}

usertwo = userone

usertwo.email = "deep@google.com"

console.log(userone.email);
console.log(usertwo.email);

