import _ from 'lodash'
import readlineSync from 'readline-sync'
const randomNum = () => {
  return _.random(1, 100)
}
const iseven = () => {
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)
  console.log('Answer "yes" if the number is even, otherwise answer "no".')
  for (let i = 0; i < 3; i++) {
    const number = randomNum()
    console.log(`Question: ${number}`)
    const answer = readlineSync.question('Your answer: ').toLocaleLowerCase()
    const correctAnswer = (number % 2 === 0)? 'yes' : 'no'
    if (answer === correctAnswer) {
      console.log('correct!')
    }
    else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`)
      return console.log(`Let's try again, ${name}!`)
    }
  }
  return console.log(`Congratulations, ${name}!`)
}

export { randomNum, iseven }
