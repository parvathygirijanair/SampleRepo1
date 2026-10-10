/** Write JavaScript code using fetch() to get the data from the API.
Print the name of each user.
Use filter() to find users whose age is 18 or above.
Print only the users whose active value is true.
Handle the API error using .catch().
Simple explanation:
fetch() → sends a request to the API.
response.json() → converts the API response into JavaScript data.
console.log(data) → displays the data.
catch() → handles errors.*/


// let obj=JSON.parse(data);
// console.log(typeof(data));
fetch("https://example.com/api/users").then(response=>response.json())
.then(data=>{
    console.log(data);
})
.catch(error=>{
    console.error(error);
    
})

async function getUsers() {
    try {
        let response = await fetch("https://example.com/api/users");
        let data = await response.json();

        console.log(data);
    }
    catch(error) {
        console.log(error);
    }
}

getUsers();
////////////////////////
let data={
  "users": [
    {
      "id": 1,
      "name": "Rahul",
      "age": 20,
      "active": true
    },
    {
      "id": 2,
      "name": "Anu",
      "age": 17,
      "active": false
    },
    {
      "id": 3,
      "name": "John",
      "age": 25,
      "active": true
    }
  ]
};
for(let i in data.users){
        // console.log(data.users[i].name);
        if(data.users[i].active===true){console.log(data.users[i].name)}

}
// for(let user of data.users) {
//     console.log(user.name);
// }
