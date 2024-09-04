// Conversions of datatypes


let score = '33ab'

console.log(typeof score);
console.log(typeof (score));

let cnvalue = Number(score);
console.log(typeof cnvalue); // it converts "33ab" that kind of strings in number
console.log(cnvalue); // but the value of that number is "NaN" [not a number]
// the original value Null ==> it gives '0' and the original value is Undefined ==> it gives 'NaN'
// on boolean value it gives 1/0

//  33 ==> 33
//  "33ab" ==> NaN
//  "Harsh" ==> NaN
//  true => 1 | false => 0


let bvalue = 1

let cnbvalue = Boolean(bvalue);
console.log(cnbvalue);

// to boolean value

// value 1 ==> true || value 0 ==> false
// "" ==> false || "Harsh" ==> true


