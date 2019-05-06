import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './SASS/Main.scss'
// the api call is in this characters file
import Characters from './Characters'
import Discuss from './Discuss'
import Logo from './Logo'
import ScrollingText from './ScrollingText'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      favorites: [],
      chatAbout: ''
    }
  }

  favoritesHandler = favorite => {
    let fav = [...this.state.favorites, favorite]
    let existsIndex = this.state.favorites.indexOf(favorite)
    if (existsIndex === -1) {
      this.setState({ favorites: fav })
    } else {
      let without = [...this.state.favorites]
      without.splice(existsIndex, 1)
      this.setState({ favorites: without })
    }
  }

  chatRouteHandler = character => {
    console.log(character)
    this.setState({ chatAbout: character })
  }

  render() {
    console.log(this.state.inputMessage && this.state.allMessages)
    return (
      <div>
        <Route
          path="/"
          exact
          render={() => (
            <div>
              <Logo />
              <ScrollingText />
              <p>
                Vote and discuss your favorite characters. This was built using
                the{' '}
                <a target="blank" href="https://www.swapi.co/">
                  star wars api
                </a>
                .
              </p>
              {this.state.favorites.length > 0 ? (
                <p>
                  Your favorite{' '}
                  {this.state.favorites.length > 1
                    ? ' characters are'
                    : 'character is'}{' '}
                  {this.state.favorites.map(favorite => {
                    if (this.state.favorites.length > 1) {
                      if (
                        favorite ===
                        this.state.favorites[this.state.favorites.length - 1]
                      ) {
                        return 'and ' + favorite + '.'
                      } else {
                        return favorite + ', '
                      }
                    } else {
                      return favorite + '.'
                    }
                  })}
                </p>
              ) : null}
              <Characters
                chatHandler={this.chatRouteHandler}
                number="1"
                favorites={this.favoritesHandler}
              />
            </div>
          )}
        />
        <Discuss chatAbout={this.state.chatAbout} />
      </div>
    )
  }
}

// <div className="buttons">
//           <Button className="buttons_button" name="Characters" />
// </div>
