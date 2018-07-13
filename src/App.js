import React, { Component } from "react";
import Title from "./components/Title";
import FriendCard from "./components/FriendCard";
import simpson from "./friends.json";
import "./App.css";


class App extends Component {
  state = {
    simpson,
    simpsonClicked: [],
    score: 0
  };

  imageClick = event => {
    const currentChar = event.target.alt;
    const charClicked = this.state.simpsonClicked.indexOf(currentChar) > -1;

    if (charClicked) {
      this.setState({
        simpson: this.state.simpson.sort(function(a, b) {
          return 1 - Math.random();
        }),
        simpsonClicked: [],
        score: 0
      });
        alert("You lost. Play again?");

    } else {
      this.setState({
          simpson: this.state.simpson.sort(function(a, b) {
            return 1 - Math.random();
          }),
          simpsonClicked: this.state.simpsonClicked.concat(
            currentChar
          ),
          score: this.state.score + 1
        },

        () => {
          if (this.state.score === 12) {
            alert("You Won!");
            this.setState({
              simpson: this.state.simpson.sort(function(a, b) {
                return 1 - Math.random();
              }),
              simpsonClicked: [],
              score: 0
            });
          }
        }
      );
    }
  };

  render() {
    return (
      <div>
        <Title 
          score={this.state.score}
        />
        <div className="wrapper">
          {this.state.simpson.map(simpson => (
            <FriendCard
              imageClick={this.imageClick}
              id={simpson.id}
              image={simpson.image}
            />
          ))}
        </div>
      </div>
    );
  }
}
export default App;