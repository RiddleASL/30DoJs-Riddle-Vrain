let challenge = '30 Days Of JavaScript'
console.log(challenge);

console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());

console.log(challenge.substring(3,7));
console.log(challenge.substring(3,21));

console.log(challenge.includes("Script"));

let split1 = challenge.split()
let split2 = challenge.split(" ")
console.log(split1);
console.log(split2);

let split3 = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'.split(",")
console.log(split3);

console.log(challenge.replace('JavaScript', 'Python'));

console.log(challenge.charAt(15));
console.log(challenge.charCodeAt(11));

console.log(challenge.indexOf('a'));
console.log(challenge.lastIndexOf('a'));

console.log('You cannot end a sentence with because because because is a conjunction'.indexOf("because"));
console.log('You cannot end a sentence with because because because is a conjunction'.lastIndexOf("because"));

console.log(' 30 Days Of JavaScript '.trim());

console.log(challenge.startsWith("30"));
console.log(challenge.endsWith("pt"));

let pattern = /a/gi
console.log(challenge.match(pattern));

let concat = '30 Days of';
console.log(concat.concat('JavaScript'));

console.log(challenge.replace("pt", "pt, ").repeat(2));