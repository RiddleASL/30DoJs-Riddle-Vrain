let sentence1 = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'

console.log(sentence1.match(/love/gi).length);

let sentence2 = 'You cannot end a sentence with because because because is a conjunction'

console.log(sentence2.match(/because/gi).length);

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

let pattern = /[@#%$&;!]/gi
let newSentence = sentence.replace(pattern, "").split(" ")

let patternEverything = /[@#%$&;!,.?]/gi
let newSentence2 = sentence.replace(patternEverything, "").split(" ")

let pattern2
console.log(newSentence);
console.log(newSentence2.sort());


let text = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

let pattern3 = /\d+/g
let newText = text.match(pattern3)

console.log(parseInt(newText[0]) * 12 +parseInt(newText[1]) +parseInt(newText[2]) * 12);
