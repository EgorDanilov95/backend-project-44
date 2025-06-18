import _ from 'lodash'
export const randomNum = () => {
  return _.random(1, 20)
}
const rules = 'Find the greatest common divisor of given numbers.'
const genRound = () => {
  let firstNum = randomNum()
  let secondNum = randomNum()
  const question = (`${firstNum} ${secondNum}`)
  while (secondNum !== 0) {
    [firstNum, secondNum] = [secondNum, firstNum % secondNum]
  }
  const correctAnswer = String(firstNum)

  return [question, correctAnswer]
}
export default { rules, genRound }
