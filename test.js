const obj = {
    name: "Saurabh",
    last:{
        surname:"Sarve"
    }
}

const {name, last:{
    surname
} } = obj
console.log(name)
console.log(obj.last)
console.log(surname)