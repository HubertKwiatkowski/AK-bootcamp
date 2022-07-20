const farenheit = [23, 140, 212, 41]
const celcius = farenheit.map(getCelcius)

function getCelcius(farenheit) {
  return (farenheit - 32) *5 / 9
}

// console.log(farenheit)
// console.log(celcius)




const isFalsey = [11, NaN, [], 'Angels']

function checkForFalsey() {
  return isFalsey.some(fal => !fal)
}

// console.log(checkForFalsey())





const words = ['Rabbit', 'Football', 'Cracking']

function getTotal() {
  return words.reduce((total, word) => total + word.length, 0)
}

// console.log(getTotal())




const numbers = [9, 16, 81]

function checkSquares() {
  return numbers.every(number => Math.sqrt(number) % 1 === 0)
}

// console.log(checkSquares())





const wordsArray = ['Florida', 'dog', 'phone']
const number = 5

function getWords() {
  return wordsArray.filter(word => word.length >= number)
}

// console.log(getWords())





const values = ['25cm', '5.6cm', '1000cm']
const onlyValues = []

function getValues() {
  values.forEach(value => {    
    let newValue = parseFloat(value)
    onlyValues.push(newValue)
  })

}

// getValues()

// console.log(onlyValues)







const stringToCheck = 'In West Philadelphia, born and raised'
const vowels = ['a', 'e', 'i', 'o', 'u']

function getVowelCount() {
  let splittedString = stringToCheck.toLowerCase().split("")
  let vowelsCount = splittedString.filter(vowel => vowels.includes(vowel))
  return vowelsCount.length
}

// console.log(getVowelCount())




 

const sentence = 'the queens gambit'

function capitalise() {
  return sentence.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
}

console.log(capitalise())