console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");

console.log(`"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`);

console.log(typeof '10' == typeof 10);         // false
console.log(typeof '10' == typeof '10');       // true

console.log(parseFloat('9.8') == 10);               // false
console.log(Math.ceil(parseFloat('9.8')) == 10);    // true

let check = ['python', 'jargon']
console.log(check[0].includes("on"), check[1].includes("on"));

console.log(Math.floor(Math.random() * 101));
console.log((Math.floor(Math.random() * 51) + 50));
console.log(Math.floor(Math.random() * 256));

console.log("JavaScript".charAt(Math.floor(Math.random() * "JavaScript".length+1)));

console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125\n");

let sentence = 'You cannot end a sentence with because because because is a conjunction'

console.log(sentence.slice(sentence.indexOf("because"), sentence.lastIndexOf("because")+7));