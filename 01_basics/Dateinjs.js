let date = new Date()

// console.log(date.toString());
// console.log(date.toISOString());
// console.log(date.toISOString());
// console.log(date.toJSON());
// console.log(date.toDateString());
// console.log(date.toTimeString());
// console.log(date.toLocaleString());
// console.log(date.toLocaleDateString());
// console.log(date.toLocaleTimeString())
// console.log(typeof date);

// let mydate = new Date(2023, 5, 23)
// let mydate = new Date(2023, 5, 23, 5, 3)
let mydate = new Date("01-05-2023")

console.log(mydate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})




