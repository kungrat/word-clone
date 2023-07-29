import React from "react";
import Guess from "../Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";

function GuessResults({ guessList, answer }) {
  // const pendingList = range(guessList.length, NUM_OF_GUESSES_ALLOWED)

  // pendingList.forEach((item, idx) => {
  //   pendingList[idx] = {
  //     guess: "",
  //     id: crypto.randomUUID()
  //   }
  // })
  // const finalList = [...guessList, ...pendingList]
  // console.log(finalList, guessList.length, NUM_OF_GUESSES_ALLOWED)

  return (
    <div className="guess-results">
      {
        guessList.map(item => <Guess key={item.id} guess={item.guess} answer={answer}/>)
      }
    </div>
  );
}

export default GuessResults;
