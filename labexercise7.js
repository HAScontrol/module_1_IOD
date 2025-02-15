
// plus function takes 'variable a' & 'variable b' and adds them together. 
function plus(a,b){ 
    return a+b
}

function testplus() {
    if (6 == plus(2,4)) {
    return true;
 }  else {
    return false;
    } 
} console.log(testplus(2,4))

function testplus2() {
    if (6 === plus(2,4)) {
    return true;
}   else {
    return false;
    }
} console.log(testplus2(2,4))

function testplus3() {
    if (6 >= plus(2,4)) {
    return true;
 }  else {
    return false;
    } 
} console.log(testplus3(2,4))


// minus function subtracts 'variable b' from 'variable a'. 
function minus(a,b){
    return a-b
}

function testminus() {
    if (6 == minus(10,4)) {
        return true;
     } else {
       return false;
        }
    }

    function testminus2() {
        if (6 === minus(10,4)) {
        return true;
    }   else {
        return false;
        }
    }

    function testminus3() {
        if (6 >= minus(10,4)) {
        return true;
     }  else {
        return false;
        } 
    } 

// divide is a mathematical operation which attempts to share the amount into equal size groups. in this case, the amount 'a'into groups of 'b'
function divide(a,b){
    return a/b
}
function testdivide() {
    if (6 == divide(12,2)) {
        return true;
     } else {
       return false;
        }
    } 

    function testdivide2() {
        if (8 === divide(32,4)) {
        return true;
    }   else {
        return false;
        }
    } 

    function testdivide3() {
        if (6 >= divide(18,3)) {
        return true;
     }  else {
        return false;
        } 
    } 

// multiply function multiplies 'variable a' & 'variable b'. 
function multiply(a,b){
    return a*b
}

function testmultiply() {
    if (30 == multiply(10,3)) {
        return true;
     } else {
       return false;
        }
    }

    function testmultiply2() {
        if (6 === multiply(3,2)) {
        return true;
    }   else {
        return false;
        }
    }

    function testmultiply3() {
        if (43 >= multiply(6,7)) {
        return true;
     }  else {
        return false;
        } 
    } 

// greet outputs 'hello,' followed by a name provided. 
function greet(name) {
    console.log("Hello,",name)
}

greet("Carl")