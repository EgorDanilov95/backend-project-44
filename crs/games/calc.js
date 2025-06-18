import _ from 'lodash'
export const randomNum = () => {
  return _.random(1, 100)
}
export const rules = 'What is the result of the expression?'
export const genRound = () => {
  const firstNum = randomNum()
  const secondNum = randomNum()
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
