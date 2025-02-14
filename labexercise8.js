export function getResult() {
    if(document.getElementById('numberOfFaceInput').checked == true) {        
        document.getElementById("resultSpan").innerHTML = getRandomInt(1, 7)      ;   
    } else if(document.getElementById('numberOfFaceInput2').checked == true) {  
        document.getElementById("resultSpan").innerHTML = getRandomInt(1, 11)  ;   
    } 
}

export function getRandomInt(min, max) {
    let minCeiled = Math.ceil(min);
    let maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}