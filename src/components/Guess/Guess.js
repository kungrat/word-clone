import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ guess = "", answer}) {
  //console.log("guess", range(0,5))
  ///const cells = range(0, 5)



  let cells = range(0, 5)
  cells.forEach((cell, idx) => {
      cells[idx] = {
        letter:  "",
      }
    }
  )
  if(guess) {
    cells = checkGuess(guess, answer)
  }
  // const cells =  range(0, 5)
  // console.log(cells)
  // cells.forEach((cell, idx) => {
  //   cells[idx] = {
  //     cellKey:  guess === "" ? "" : cell,
  //     id: crypto.randomUUID()
  //   }
  // })
  console.log(cells)

  return (
    <p className="guess">
    {
      cells.map((cell, index) => <span className={`cell ${cell.status}`} key={index}>{cell.letter}</span>)
    }
    </p>
  );
}

export default Guess;
