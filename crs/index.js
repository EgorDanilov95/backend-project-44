import readlineSync from 'readline-sync'
import { rules, genRound } from '/home/Egor/Desktop/backend-project-44/crs/games/calc.js'
import progressionGame from '/home/Egor/Desktop/backend-project-44/crs/games/progress.js'
import { progression } from '/home/Egor/Desktop/backend-project-44/crs/games/progress.js'
const game = (gameName) => {
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)
  console.log(gameName.rules)
  for (let i = 0; i < 3; i++) {
    const [question, correctAnswer] = gameName.genRound()
    console.log(`Question: ${question}`)
    const answer = readlineSync.question('Your answer: ').toLowerCase()
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

export default game