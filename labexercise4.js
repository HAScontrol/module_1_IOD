// plus function takes 'variable a' & 'variable b' and adds them together. 
export function plus(a,b){ 
    return a+b
}

// minus function subtracts 'variable b' from 'variable a'. 
export function minus(a,b){
    return a-b
}

// divide is a mathematical operation which attempts to share the amount into equal size groups. in this case, the amount 'a'into groups of 'b'
export function divide(a,b){
    return a/b
}

// multiply function multiplies 'variable a' & 'variable b'. 
export function multiply(a,b){
    return a*b
}

console.log(plus(5,1))
console.log(minus(4,6))
console.log(divide(6,3))
console.log(multiply(4,8))


// greet outputs 'hello,' followed by a name provided. 
export function greet(name) {
    console.log("Hello,",name)
}

greet("Carl")