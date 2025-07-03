import _ from 'lodash'
export const isEven = (num) => {
  if (num % 2 === 0) {
    return true
  }
  else return false
}

const rules = 'Answer "yes" if the number is even, otherwise answer "no".'
const genRound = () => {
  let question = _.random(1, 40)
  let correctAnswer = (isEven(question)) ? 'yes' : 'no'
  return [question, correctAnswer]
}

export default { rules, genRound }
