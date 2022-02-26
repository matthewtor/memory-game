
document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
    name: 'frozen',
    img: 'images/frozen.jpg'
  },
  {
    name: 'frozen',
    img: 'images/frozen.jpg'
  },
  {
    name: 'blueal',
    img: 'images/blueal.jpg'
  },
  {
    name: 'blueal',
    img: 'images/blueal.jpg'
  },
  {
    name: 'mermaid',
    img: 'images/mermaid.jpg'
  },
 {
    name: 'mermaid',
    img: 'images/mermaid.jpg'
  },
  {
    name: 'snowwhite',
    img: 'images/snowwhite.jpg'
  },
  {
    name: 'snowwhite',
    img: 'images/snowwhite.jpg'
  },
  {
    name: 'beautybeast',
    img: 'images/beautybeast.jpg'
  },
  {
    name: 'beautybeast',
    img: 'images/beautybeast.jpg'
  },
  {
    name: 'micky',
    img: 'images/micky.jpg'
  },
  {
    name: 'micky',
    img: 'images/micky.jpg'
  }
  
  ]

  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  var cardsChosen = []
  var cardsChosenId = []
  var cardsWon = []

  //create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement('img')
      card.setAttribute('src', 'images/rsz_disney.jpg')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }

  //check for matches
  function checkForMatch() {
    var cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/rsz_disney.jpg')
      cards[optionTwoId].setAttribute('src', 'images/rsz_disney.jpg')
      alert('You have clicked the same image!')
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      alert('You found a match')
      cards[optionOneId].setAttribute('src', 'images/rsz_walt.jpg')
      cards[optionTwoId].setAttribute('src', 'images/rsz_walt.jpg')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'images/rsz_disney.jpg')
      cards[optionTwoId].setAttribute('src', 'images/rsz_disney.jpg')
      alert('Sorry, try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if  (cardsWon.length === cardArray.length/2) {
      resultDisplay.textContent = 'Congratulations! You found them all!'
    }
  }

  //flip your card
  function flipCard() {
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 500)
    }
  }

  createBoard()
  
})


