const today = new Date()
const date = today.getDate()
const day = today.getDay()
const year = today.getFullYear()

const isoString = today.toISOString()


console.log(today)
// console.log(date)
// console.log(day)
// console.log(year)

// console.log(isoString)


const christmas = new Date('2022-12-24T18:00:00.051Z')


console.log(christmas)

const timer = document.getElementsByClassName('error')

const milisecondsToXmas = christmas - today

const minutes = Math.floor((milisecondsToXmas / 60000)) % 60
const hours = Math.floor(milisecondsToXmas / (60*60000)) % 24
const days = Math.floor(milisecondsToXmas / (24*60*60000))


console.log(days, hours, minutes)


