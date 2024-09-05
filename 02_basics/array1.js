let marvelHero = ["spiderman", "ironman", "thor"]
let dcHero = ["superman", "batman", "flash"]

//marvelHero.push(dcHero)

//console.log(marvelHero);

const allnewHero = [...marvelHero, ...dcHero]
console.log(allnewHero);

const anotherarray = [6,2,4,[4,2,1],5,7,[1,[5,9]]]

const realarray = anotherarray.flat(Infinity)
console.log(realarray);


console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));