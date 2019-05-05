import React, { Component } from 'react'

export default class Vote extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clicked: false
    }
  }

  toggleHandler = () => {
    this.setState({ clicked: !this.state.clicked })
    this.props.favorites(this.props.name)
  }

  render() {
    return (
      <div>
        <button
          className={this.state.clicked ? 'clicked' : null}
          onClick={this.toggleHandler}
        >
          &#8593;
        </button>
      </div>
    )
  }
}
