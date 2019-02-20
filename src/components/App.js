import React, { Component } from "react";
import "./../App.css";
import Header from "./Header";
import Players from "./Players";

class App extends Component {
  state = {
    players: [
      {
        name: "Claudiu",
        score: 0,
        id: 1
      },
      {
        name: "Andreea",
        score: 0,
        id: 2
      },
      {
        name: "Gabi",
        score: 0,
        id: 3
      },
      {
        name: "Andrei",
        score: 0,
        id: 4
      },
      {
        name: "Alex",
        score: 0,
        id: 5
      }
    ]
  };

  handleRemovePlayer = id => {
    this.setState(prevState => {
      return {
        players: prevState.players.filter(p => {
          return p.id !== id;
        })
      };
    });
  };

  handleScoreChange = (index, delta) => {
    this.setState(prevState => {
      return {
        score: (prevState.players[index].score =
          prevState.players[index].score + delta)
      };
    });
  };
  render() {
    return (
      <div className="scoreboard">
        <Header title="Scoreboard" totalPlayers={this.state.players.length} />
        {this.state.players.map((player, index) => {
          return (
            <Players
              name={player.name}
              id={player.id}
              key={player.id.toString()}
              index={index}
              score={player.score}
              changeScore={this.handleScoreChange}
              removePlayer={this.handleRemovePlayer}
            />
          );
        })}
        <Players />
      </div>
    );
  }
}

export default App;
