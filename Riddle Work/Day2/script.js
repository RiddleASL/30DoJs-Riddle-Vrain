let sentence = "This is a sentence. this is sentence two. hello sentence 3. this is a new one. Hello world. Cool"

function capitalizeArr(text){
    arr = text.split('.')
    let array = []
    arr.forEach((element) => {
        if(element.trim().charAt(0) != element.trim().charAt(0).toUpperCase()){
            arr = []
            newLetter = element.trim().charAt(0).toUpperCase();
            newSentence = element.replace(element.trim().charAt(0), newLetter).trim();
            
            array.push(newSentence)
        } else {
            array.push(element)
        }
    });

    let finalSen = ""
    array.forEach(element => {
        senEnd = ". "
        finalSen = finalSen.concat(element, senEnd)
    })
    console.log(finalSen);
}

console.log(capitalizeArr(sentence));

function addNumbers(arr){
    let total = 0;
    arr.forEach((element) => {
        total += element;
    })
    return total
}

function pythTheorem(a,b){
    a = a * a
    b = b * b

    c = Math.sqrt(a + b)
    return c
}

function quadFormula(a,b,c){
    toDecimalPoint = 3
    
    if(a != 0){
        negB = -b
        sqrSec = Math.sqrt((b**2)-(4*a*c))
        dinom = 2*a
        
        x1 = ((negB + sqrSec)/dinom).toFixed(toDecimalPoint)
        x2 = ((negB - sqrSec)/dinom).toFixed(toDecimalPoint)

        results = [+x1, +x2]
        return `Results: \n\t+X: ${results[0]} \n\t-X: ${results[1]} `
    } else {
        return "A != 0"
    }
}

function circleArea(r){
    PI = Math.PI;

    area = (PI*(r**2)).toFixed(5)
    return +area
}

function sphereSurfaceArea(r){
    PI = Math.PI;

    area = (4*PI*(r**2)).toFixed(5)
    return +area
}

function sphereVolume(r){
    PI = Math.PI;

    volume = ((4/3)*PI*(r**3)).toFixed(5)
    return +volume
}

console.log(quadFormula(-1,-6,8)) // [-7.123, 1.123]
console.log(quadFormula(1,5,6))
console.log(quadFormula(1,-9,14))
console.log(quadFormula(-1,-6,8))
console.log(addNumbers([1,2,3]));
console.log(circleArea(10));
console.log(sphereSurfaceArea(10));
console.log(sphereVolume(10));
