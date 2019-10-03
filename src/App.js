import React from 'react';
import Wrapper from './components/wrapper';
import Navbar from './components/Navbar';
import Header from './components/Header';
import MatchCard from './components/MatchCard';
import friends from './images/images.json';

function mixCards(friends) {
  for (let i = friends.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [friends[i], friends[j]] = [friends[j], friends[i]];
  }
  return friends;
}

class App extends React.Component {
  state = {
    friends,
    count: 0,
    topScore: 0,
    clickedList: [],
    answer: ''
  };

  handleIncrement = () => {
    const newCount = this.state.count + 1;
    this.setState({
      count: newCount,
      answer: 'Correct!'
    });
    if (newCount >= this.state.topScore) {
      this.setState({ topScore: newCount });
      if (newCount === 12) {
        this.setState({ answer: 'Hey Arnold! You Win!' });
        this.reset();
      }
    } else if (newCount === 12) {
      this.setState({ answer: 'Hey Arnold! You Win!' });
    }
    this.handleShuffle();
  };

  handleClick = id => {
    if (this.state.clickedList.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clickedList: this.state.clickedList.concat(id) });
    } else {
      this.setState({
        answer: 'Hey Arnold! Try Again!'
      });
      this.handleShuffle();
      this.reset();
    }
  };

  handleShuffle = () => {
    let shuffledCards = mixCards(friends);
    this.setState({
      friends: shuffledCards
    });
  };

  reset = () => {
    if (this.state.count >= this.state.topScore) {
      this.setState({
        topScore: this.state.count,
        count: 0,
        clickedList: []
      });
    } else {
      this.setState({
        count: 0,
        clickedList: []
      });
    }
  };

  render() {
    return (
      <div>
        <Navbar
          answer={this.state.answer}
          count={this.state.count}
          topScore={this.state.topScore}
        />
        <Header />
        <div>
          <Wrapper>
            {friends.map(friends => (
              <MatchCard
                key={friends.id}
                id={friends.id}
                image={friends.image}
                handleClick={this.handleClick}
                handleShuffle={this.handleShuffle}
                handleIncrement={this.handleIncrement}
                mixCards={this.mixCards}
              />
            ))}
          </Wrapper>
        </div>
      </div>
    );
  }
}

export default App;
