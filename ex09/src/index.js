const people = ['Mortarion', 'Jagathai Khan', 'Fulgrim', 'Alpharius']
const hour = 14


function sendReminder() {
  people.forEach(person => {
    console.log('Hi ' + person + '! I would like to remind you that our meeting is at ' + hour + " o'clock")
  })
}

sendReminder()