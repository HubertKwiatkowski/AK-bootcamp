const housemates2018 = [
  {
    name: 'Ahmed',
    age: 24
  },
  {
    name: 'Ellen',
    age: 35
  },
  {
    name: 'Woody',
    age: 30
  }
]

const housemates2021 = housemates2018.map(housemate => housemate.age + 2)


console.log(housemates2018)
console.log(housemates2021)



// mates.name => mates.name,
// mates.age => mates.age + 3