import _ from 'lodash'

const rules = 'Find the greatest common divisor of given numbers.'
const genRound = () => {
  let firstNum = _.random(1, 20)
  let secondNum = _.random(1, 20)
  const question = (`${firstNum} ${secondNum}`)
  while (secondNum !== 0) {
    [firstNum, secondNum] = [secondNum, firstNum % secondNum]
  }
  const correctAnswer = String(firstNum)

  return [question, correctAnswer]
}
export default { rules, genRound }
