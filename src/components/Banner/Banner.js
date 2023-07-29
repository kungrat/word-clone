import React from "react";

function Banner({ win, answer, count}) {
  if(win === "WIN") {
    return (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong> {count} guesses</strong>.
        </p>
      </div>
    )
  } else if(win === "LOSS") {
    return (
      <div className="sad banner">
        <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
      </div>
    )
  } else {
    return null
  }
}

export default Banner;
