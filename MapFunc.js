function squareNumber(arr){
    return arr.map((item) => item * item)
}
const arr= [1,2,3,4]
console.log(squareNumber(arr));


function addNewObjectValue(users, property){
    for(let user of users){
        user[property] = "Banda"
    }
    return users;
}
const users = [
    {name: 'Uma', role:"IT"},
    {name: 'Uma1', role:"IT"},
    {name: 'Uma2', role:"IT"},
    {name: 'Uma3', role:"IT"}
]
console.log(addNewObjectValue(users, "family"))

function removeObjectValue(users, property) {
    return users.map(user => {
        const { [property]: _, ...restAll } = user;
        return restAll;
    });
}

const deleteUsers = [
  { name: 'Uma', role: 'IT', family: 'Banda' },
  { name: 'Uma1', role: 'IT', family: 'Banda' },
  { name: 'Uma2', role: 'IT', family: 'Banda' },
  { name: 'Uma3', role: 'IT', family: 'Banda' }
];

console.log(removeObjectValue(deleteUsers, "family"));