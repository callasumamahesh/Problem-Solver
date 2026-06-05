const users = [
    {name:"uma", department:"HR"},
    {name:"uma", department:"IT"},
    {name:"uma", department:"ADMIN"},
    {name:"uma", department:"IT"},
    {name:"uma", department:"HR"}
]

const groupByUsers = (users) => {
    const result = users.reduce((acc, user) => {
        let userDepartment = user.department;
        if(!acc[userDepartment]){
            acc[userDepartment] = []
        }
        acc[userDepartment].push(user)
        return acc;
    }, {})
    return result
}

console.log(groupByUsers(users),'test');