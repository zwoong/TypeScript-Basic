const person1 = {
    name: 'Mark',
    age: 39
}

const person2 = Object.create({
    name: 'mark',
    age: 39
})

// "object : primitive type이 아닌 것"
console.log(person1);

