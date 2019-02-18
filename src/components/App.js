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
  render() {
    return (
      <div className="scoreboard">
        <Header title="Scoreboard" totalPlayers={this.state.players.length} />
        {this.state.players.map(player => {
          return (
            <Players
              name={player.name}
              id={player.id}
              key={player.id.toString()}
              removePlayer={this.handleRemovePlayer}
            />
          );
        })}
        <Players name="John" />
      </div>
    );
  }
}

export default App;
