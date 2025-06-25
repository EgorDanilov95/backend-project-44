import _ from 'lodash'
export const randomNum = () => {
  return _.random(1, 100)
}
const rules = 'Answer "yes" if the number is even, otherwise answer "no".'
const genRound = () => {
  let question = randomNum()
  let correctAnswer = (question % 2 === 0) ? 'yes' : 'no'
  return [question, correctAnswer]
}

export default { rules, genRound }
