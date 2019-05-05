import React, { Component } from 'react'
import Vote from './Vote'
import CommentIcon from './CommentIcon'

export default class Characters extends Component {
  constructor(props) {
    super(props)
    this.state = {
      characters: []
    }
  }

  componentDidMount() {
    fetch('https://swapi.co/api/people/', {
      method: 'get',
      headers: { 'content-type': 'application/json' }
    })
      .then(response => response.json())
      .then(data => {
        this.setState({ characters: data.results })
      })
  }

  render() {
    return (
      <div className="container">
        {this.state.characters.map((character, i) => {
          const name = character.name
          return (
            <div key={i} className="character">
              <div className="character_name">
                <p>{name}</p>
                <span>Height: {character.height}</span>
                <span>Mass: {character.mass}</span>
                <span>Eye Color: {character.eye_color}</span>
                <span>Skin Color: {character.skin_color}</span>
              </div>
              <div className="character_buttons">
                <CommentIcon name={name} chatHandler={this.props.chatHandler} />
                <Vote favorites={this.props.favorites} name={name} />
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}
