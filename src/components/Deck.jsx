import { useState, useRef } from 'react'
import Card from './Card'

function Deck() {

    const [deck, setDeck] = useState([
        { id: 0, name: 'image1', status: '', img: '/images/image1.jpg' },
        { id: 0, name: 'image1', status: '', img: '/images/image1.jpg' },
        { id: 1, name: 'image2', status: '', img: '/images/image2.webp' },
        { id: 1, name: 'image2', status: '', img: '/images/image2.webp' },
        { id: 2, name: 'image3', status: '', img: '/images/image3.png' },
        { id: 2, name: 'image3', status: '', img: '/images/image3.png' },
        { id: 3, name: 'image4', status: '', img: '/images/image4.jpg' },
        { id: 3, name: 'image4', status: '', img: '/images/image4.jpg' },
        { id: 4, name: 'image5', status: '', img: '/images/image5.webp' },
        { id: 4, name: 'image5', status: '', img: '/images/image5.webp' },
        { id: 5, name: 'image6', status: '', img: '/images/image6.jpg' },
        { id: 5, name: 'image6', status: '', img: '/images/image6.jpg' },
    ].sort(() => Math.random() - .5))

    const [previousCardState, setPreviousCardState] = useState(-1)
    const previousIndex = useRef(-1)
    const [countWin, setCountWin] = useState(2)
    const [win, setWin] = useState(false)



    const matchCheck = (currentCard) => {
        if (deck[currentCard].id === deck[previousCardState].id) {
            deck[previousCardState].status = 'active matched'
            deck[currentCard].status = 'active matched'
            setPreviousCardState(-1)
            setCountWin(countWin + 2)

            if (countWin === (deck.length)) {
                setTimeout(() => {
                    setWin(true)
                }, 200)
            }
        } else {
            /* deck[previousCardState].status = 'active' */
            setDeck([...deck])
            setTimeout(() => {
                setPreviousCardState(-1)
                deck[previousCardState].status = 'unmatch'
                deck[currentCard].status = 'unmatch'
                setDeck([...deck])
            }, 1000)

        }
    }

    const clickhandler = (index) => {
        setTimeout(() => {
            if (index !== previousIndex.current) {
                if (deck[index].status === 'active matched') {
                    alert('already matched')
                } else {
                    if (previousCardState === -1) {
                        previousIndex.current = index
                        deck[index].status = 'active'
                        setDeck([...deck])
                        setPreviousCardState(index)
                    } else {
                        deck[index].status = 'active'
                        matchCheck(index)
                        previousIndex.current = -1
                    }

                }
            }
            else {
                alert('card currently selected')
            }
        }, 200)
    }

    if (win !== true) {
        return (
            <div className="container">
                {deck.map((card, index) => {
                    return (
                        <Card card={card} key={index} index={index} clickhandler={clickhandler} win={win} />
                    )
                })}
            </div>
        )
    } else {
        return (
            <div className="container winner">
                <img src="./images/Dora_the_Explorer.webp" alt="oscour" />
                <h1 className="win">C'est gagné, c'est gagné, we did it yeah ! etc...</h1>
            </div>)
    }

}

export default Deck