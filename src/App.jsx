import './App.css';
import React, { Component } from 'react';


import Card from './component/Card';
import Footer from './component/Footer';
import Header from './component/Header';
import Navbar from './component/Navbar';
import tiles from './tiles.json';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isGuessCorrect: true,
      tiles: tiles,
      score: 0,
      maxScore: 15,
      topScore: 0,
      message: 'Click an Image to begin.'
    };
  }

  // functions for handling animation.

  //remove animation CSS class
  removeAnimation = () => {
    let element = document.getElementById('animate-this');
    if (this.state.isGuessCorrect) {
      element.classList.remove('jello-vertical');
    }
    if (!this.state.isGuessCorrect) {
      element.classList.remove('shake-horizontal');
    }
  };

  //ADDs animation CSS class

  addAnimation = (isCorrect) => {
    let element = document.getElementById('animate-this');
    if (isCorrect) {
      element.classList.add('jello-vertical');
    }
    if (!isCorrect) {
      element.classList.add('shake-horizontal');
    }
  };

  //toggles CSS class for animation

  toggleAnimation = (isCorrect) => {
    if (isCorrect) {
      this.addAnimation(true);

      setTimeout(this.removeAnimation, 500);
    }
    if (!isCorrect) {
      this.addAnimation(false);

      setTimeout(this.removeAnimation, 500);
    }
  };

  // game logic

  //main click function

  handleSaveClick = (id) => {
    const tilez = this.state.tiles;
    const tileClicked = tilez.filter((tile) => tile.id === id);

    if (!tileClicked[0].clicked) {
      tileClicked[0].clicked = true;

      this.handleCorrectClick();

      this.toggleAnimation(true);

      this.randomizeCharacters(tilez);

      this.setState({ tilez });
    } else {
      this.handleIncorrectClick();
      this.toggleAnimation(false);
    }
  };

  //function for randomization

  randomizeCharacters = (characters) => {
    characters.sort((a, b) => {
      return 0.5 - Math.random();
    });
  };

  //handler for correct guesses
  handleCorrectClick = () => {
    this.setState({ isGuessCorrect: true });
    if (this.state.score + 1 > this.state.topScore) {
      this.setState({ topScore: this.state.topScore + 1 });
    }
    if (this.state.score + 1 >= this.state.maxScore) {
      this.setState({
        score: this.state.score + 1,
        message: ' You WIN! ',
        messageClass: 'correct'
      });
    } else {
      this.setState({
        // eslint-disable-next-line react/no-direct-mutation-state
        score: (this.state.score = 1),
        message: 'You Guessed Correctly!',
        messageClass: 'correct'
      });
    }
  };

  //handler for incorrect guesses
  handleIncorrectClick = () => {
    this.setState({
      message: 'Incorrect, Play Again?',
      isGuessCorrect: false
    });

    this.resetGame();
  };

  //resets game
  resetGame = (is) => {
    const tilez = this.state.tiles;
    for (let i = 0; i < tilez.length; i++) {
      tilez[i].clicked = false;
    }
    this.setState({ score: 0 });
  };

  //Render and return

  render() {
    const { message, score, tiles, topScore } = this.state;
    return (
      <div className='fluid-container lodge h-100vh'>
        <Navbar
          classname='row'
          score={score}
          topScore={topScore}
          message={message}
        />
        <Header className='bg-header row' />

        <div className='d-flex justify-content-center main-content mx-auto padding-main flex-wrap row'>
          {tiles.map(({ id, name, image, clicked }) => (
            <Card
              key={id}
              id={id}
              name={name}
              image={image}
              clicked={clicked}
              clickHandler={this.handleSaveClick}
            />
          ))}
        </div>

        <Footer className='footer-mgn row' />
      </div>
    );
  }
}

export default App;
