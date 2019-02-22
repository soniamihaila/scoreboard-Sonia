import React from "react";

class AddPlayers extends React.Component {
  state = {
    value: ""
  };

  onSubmitForm = e => {
    e.preventDefault();
    this.props.addPlayers(this.state.value);
  };

  handleValueChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitForm}>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleValueChange}
            placeholder="Enter your name"
          />
          <input type="submit" value="Add player" />
        </form>
      </div>
    );
  }
}

export default AddPlayers;
