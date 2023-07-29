import React from "react";

function InputGuess({saveGuess}) {
  const [guess, setGuess ] = React.useState('')
  const onChangeHandler = (e) => {
    setGuess(e.target.value.toUpperCase())
  }
  const onFormSubmit = (e) => {
    e.preventDefault()
    console.log(guess)
    saveGuess(guess)
    setGuess('')
  }
  return (
    <form className="guess-input-wrapper" onSubmit={onFormSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={onChangeHandler}
        maxLength={5}
        minLength={5}
        pattern=".{5,}" title="Word must have 5 characters"
        />
    </form>
);
}

export default InputGuess;
