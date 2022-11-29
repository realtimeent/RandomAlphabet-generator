//select DOM Elements

const formDom = document.querySelector('.numberForm')
const numberInput = document.querySelector('.numberInput')
const answerDom = document.querySelector('.answers')
//array of alphabets
let alphabets = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
]
//generate random alphabets
function generaterandomAlphabet() {
  return alphabets[Math.floor(Math.random() * alphabets.length)]
}

//add eventlistener on the formdom

formDom.addEventListener('submit', generate)

//function generate
// console.log(randomLetter, 'e')

function generate(e) {
  e.preventDefault()
  let result = parseInt(numberInput.value)
  if (result) {
    let arr = []
    for (let i = 0; i < alphabets.length; i++) {
      arr.push(generaterandomAlphabet())
      // console.log(arr)
      let randomletters = arr
      console.log(randomletters)
      randomletters = randomletters.map((randomletter) => {
        return `<h2 class='alphabet' style='margin-left:0.4rem;color:#fff; background-color:${ranbgcolors};padding:0.2rem'>${randomletter}</h2>`
      })
      console.log(randomletters)
      let answerContents = randomletters.slice(0, result).join('')
      console.log(answerContents)
      answerDom.innerHTML = answerContents
      answerDom.classList.add('active')
    }
  } else {
    addDanger('danger')
  }
  numberInput.value = ''
}
function addDanger(action) {
  numberInput.classList.add(action)

  setTimeout(() => {
    numberInput.classList.remove(action)
  }, 2000)
}
const bgcolors = [
  `#5f00ba`,

  `#fa8334`,
  ` #cf1259`,
  `#175617`,

  ` #360a14`,

  `#1446a0`,

  ` #cf1259`,
  ` #a09be7`,
  `#ff101f`,
  `#070707`,
  `#172a3a`,
]

const ranbgcolors = bgcolors[Math.floor(Math.random() * bgcolors.length)]
