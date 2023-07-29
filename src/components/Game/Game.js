import React from 'react';

import { range, sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import Banner from '../Banner/Banner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState(() => {
    const list = range(0, NUM_OF_GUESSES_ALLOWED)
    list.forEach((item, idx) => {
      list[idx] = {
        guess: "",
        id: crypto.randomUUID()
      }
    })
    return list
  })
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [win, setWin] = React.useState(null)

  const saveGuess = (guess) => {
    if(guess === answer.toUpperCase()) {
      setWin("WIN")
    }
    else if(currentIndex + 1 >= NUM_OF_GUESSES_ALLOWED) {
      setWin("LOSS")
    }

    if(currentIndex >= NUM_OF_GUESSES_ALLOWED || !guess) {
      return
    }

    const list = [...guessList]
    list[currentIndex] = {
      ...list[currentIndex],
      guess
    }

    setGuessList(list)
    //console.log("list", list)
    setCurrentIndex(currentIndex + 1)

  }

  //console.log("guessList", guessList)
  return (
    <>
      <GuessResults guessList={guessList} answer={answer} setWin={setWin}/>
      <GuessInput saveGuess={saveGuess}/>
      <Banner win={win} answer={answer} count={currentIndex}/>
    </>
  );
}

export default Game;
