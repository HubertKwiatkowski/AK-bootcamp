const users = [
  {
    name: 'Konrad',
    lastName: 'Curze',
    pets: 'chamster'
  },
  {
    name: 'Lion',
    lastName: "El'Jonson",
    pets: false
  },
  {
    name: 'Mortarion',
    lastName: false,
    pets: 'Typhus'
  },
  {
    name: 'Magnus',
    lastName: false,
    pets: 1000
  },
]

// console.log(users)
// console.log(users[2].name)

for (i=0;i<users.length;i++) {
  if (users[i].lastName!=false) {
    console.log(users[i].name + ' has a last name')
  } else {
    console.log(users[i].name + ' has not last name')
  }
}