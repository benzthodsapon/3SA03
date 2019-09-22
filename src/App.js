import React from 'react';
import CharacterCard from './CharacterCard.js';
import './App.css';
import _ from 'lodash';

let message = 'Hello'

const prepareStateFromWord = (given_word) => {
  let word = given_word.toUpperCase()
  let chars = _.shuffle(Array.from(word))
  return {
    word,
    chars,
    attempt: 1,
    guess: [],
    completed: false
  }
}

class App extends React.Component {

  state = prepareStateFromWord(message);

  activationHandler = (c) => {
    let guess = [...this.state.guess, c]
    this.setState({ guess })
    if (guess.length == this.state.chars.length) {
      if (guess.join('').toString() == this.state.word) {
        this.setState({ guess: [], completed: true })
      } else {
        this.setState({ guess: [], attempt: this.state.attempt + 1 })
      }
    }
  }
  again = () => {
    this.setState({ completed: false, attempt: this.state.attempt + 1, })
  }



  render() {
    let Completez = this.state.completed === true ? <h2>Complete </h2> : '';
    let Completez1 = this.state.completed === true ? <h2 onClick={this.again}>กดเพื่อเล่นอีกรอบ!!! </h2> : '';
    return (
      <div>
        {
          Array.from(this.state.chars).map((item, index) => (
            <CharacterCard
              value={item}
              key={index}
              attempt={this.state.attempt}
              activationHandler={this.activationHandler}
            />
          ))
        }
        <h2>Selected</h2>
        {
          Array.from(this.state.guess).map((item, index) => (
            <CharacterCard
              value={item}
              key={index}
              activationHandler={this.activationHandler}
            />
          ))
        }
        


        <h3>
          Thodsapon Tantitham 6035512040
      </h3>
      </div>

    )

  }
}

export default App;