import _ from 'lodash'

export const rules = 'What is the result of the expression?'
export const genRound = () => {
  const firstNum = _.random(1, 10)
  const secondNum = _.random(1, 10)
  const randomOperator = _.sample(['+', '-', '*'])
  let correctAnswer
  switch (randomOperator) {
    case '+' :
      correctAnswer = firstNum + secondNum
      break
    case '-' :
      correctAnswer = firstNum - secondNum
      break
    case '*' :
      correctAnswer = firstNum * secondNum
      break
  }
  const question = (`${firstNum} ${randomOperator} ${secondNum}`)
  return [question, String(correctAnswer)]
}
export default { rules, genRound }
