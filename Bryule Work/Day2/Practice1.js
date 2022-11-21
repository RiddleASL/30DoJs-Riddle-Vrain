    let numOne = 3
    let numTwo = "3"

console.log("hello");
console.log(numOne == numTwo);
console.log(numOne === numTwo);

    let nums = [0,1,2,3]
console.log(nums);

    nums[0] = 10
console.log(nums);

    let numbers = [10,1,2,3]
console.log(nums == numbers);

    let num = nums
console.log(num == nums);


    let age = 20            //Things can change value
    const gravity = 9.81    //Always constant

    const PI = Math.PI
console.log(PI);

console.log(Math.round(PI));

    let random = Math.floor(Math.random() * 11) //Floor always -1 the number you put in
    let random2 = Math.ceil(Math.random() * 11) //Ceilling always never = 0
console.log(random);
console.log(random2);

    let a = 2
    let b = 3
console.log("Number", a , "and", b , "equals" , a + b);
console.log(`Number ${a} and ${b} equals ${a+b}`);
    
    let firstName = "Bryule"
console.log(firstName.length);

    let letter = firstName[0]
console.log(letter);

console.log(firstName.toLocaleUpperCase());
console.log(firstName.toLocaleLowerCase());
console.log(firstName.substr(1,5));
console.log(firstName.substring(1,5));

    let fullName = "Bryule Cryule Dryule"
console.log(fullName.split(" "));
console.log(fullName.includes("Cryule"))
console.log(fullName.replace("Cryule", "Fryule"))
console.log(fullName.indexOf ("C"));

console.log(firstName.concat("is", "a", "[insert thing here]"));