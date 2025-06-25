import _ from 'lodash'

export const progression = () => {
  let step = _.random(1, 3)
  let start = _.random(1, 7)
  let result = []
  for (let index = 0; index < 10; index++) {
    let currentElement = start + index * step
    result.push(currentElement)
  }
  return result
}

const rules = 'What number is missing in the progression?'
const genRound = () => {
  let prog = progression()
  let hiddenIndex = _.random(0, 9)
  const correctAnswer = prog[hiddenIndex].toString()
  prog[hiddenIndex] = '..'
  const question = prog.join(' ')
  return [question, correctAnswer]
}
export default { rules, genRound }
