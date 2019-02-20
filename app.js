const players = [
    {
        name: "Michael",
        score: 50,
        id: 1
    },
    {
        name: "Andreea",
        score: 85,
        id: 2
    },
    {
        name: "John",
        score: 95,
        id: 3
    },
    {
        name: "Gabi",
        score: 80,
        id: 4
    }
];

const Header = (props) => {
    return (
        <header>
            <h1>{ props.title }</h1>
            <span className="stats">Players: { props.totalPlayers }</span>
        </header>
    );
}

class Counter extends React.Component {

    state = {
        score: 0
    }

    incrementScore = () => {
        this.setState( prevState => ({
            score: prevState.score + 1
        }))
    }

    decrementScore = () => {
        this.setState( prevState => {
            return {
                score: prevState.score -= 1
            };
        })
    }

    render() {
        return (
            <div className="counter">
                <button className="counter-action decrement"
                        onClick={ this.decrementScore }> - </button>
                <span className="counter-score"> { this.state.score } </span>
                <button className="counter-action increment"
                        onClick={ this.incrementScore }> + </button>
            </div>
        );
    }
}

const Player = (props) => {
    return (
        <div className="player">
            <span className="player-name">
                { props.name }
            </span>

            {/* Player is parent of Counter */}
            <Counter />
        </div>
    );
};

//App top -level -component
//Components =  parent - child relationship
const App = (props) => {
    return (
        <div className="scoreboard">
            <Header title="Scoreboard" totalPlayers={ props.initialPlayers.length } />

            {/* Players list */}
            {/* concept of: independent, self-contained & reusable components - which supports the idea of separation of concerns  */}
            {/* each component in your UI should be responsible for ONE-THING only */}
            {/* the values for these props could come dynamically from a DB or json API */}
            {/*  keys needs to be unique -- in order for React to keep track of elements that have changed  */}
            {/* key is needed only for those elements that gets removed or updated or rearranged within UI - so which items where changed, removed or updated from the DOM  */}

            { props.initialPlayers.map( (player) => {
                return <Player
                        name={player.name}
                        key={player.id.toString() } />
            })}
        </div>
    );
};

ReactDOM.render(
    <App initialPlayers={ players } />,
    document.getElementById('root')
);
