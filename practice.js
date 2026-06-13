// const mohsen = {
//   name: "Mohsen",
//   age: 33,
//   goal: "Migration",
// };
//console.log(mohsen);

// const {name , age }= mohsen
// console.log(name);
// console.log(age);

// const city = {
//     name: "Berlin",
//     country:"Germany",
//     population:3700000
// }

// const {name , country} = city
// console.log(name);
// console.log(country);

//const job = {title:"React Developer", salary: "Ok"}
//const person ={name:"Mohsen", ...job , age:33}
//const future={...person,...job,city:"Berlin"}
//console.log(future);

// async function getUser() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
//   const data = await response.json();
//   console.log(data);
// }
// getUser();

async function getUser() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/5");
  const data = await response.json();
  console.log(data.name);
  console.log(data.email);
}

getUser();
