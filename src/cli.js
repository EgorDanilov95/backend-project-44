import readlineSync from 'readline-sync'
const getTheName = () => {
  const name = readlineSync.question('May I have your name? ')
  return `Hello, ${name}!`
}

export default getTheName
