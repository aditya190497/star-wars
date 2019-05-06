import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './SASS/Main.scss'
// the api call is in this characters file
import Characters from './Characters'
import Discuss from './Discuss'
import Logo from './Logo'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      favorites: [],
      chatAbout: '',
      isScrolling: true
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

  resetOnScroll = () => {
    this.setState({ isScrolling: false })
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
              <div className="description" onScroll={this.resetOnScroll}>
                <p className={this.state.isScrolling ? null : 'stop'}>
                  The Star Wars franchise depicts the adventures of characters
                  "A long time ago in a galaxy far, far away...." in which
                  humans and many species of aliens (often humanoid) co-exist
                  with robots, or "droids", who may assist them in their daily
                  routines, and space travel between planets is common due to
                  hyperspace technology. The rises and falls of different
                  governments are chronicled throughout the saga: the democratic
                  Republic is corrupted and overthrown by Sheev Palpatine, who
                  establishes the Galactic Empire. The Empire is fought by the
                  Rebel Alliance in a Galactic Civil War that spans several
                  years. The surviving Rebellion gives rise to the New Republic,
                  while the remnants of the Empire reform as the First Order and
                  threaten to destroy the Republic. Heroes of the former
                  rebellion lead the Resistance against the oppressive
                  dictatorship. A mystical power known as "the Force" is
                  described in the original film as "an energy field created by
                  all living things ... that binds the galaxy together." Through
                  training and meditation, those whom "the Force is strong with"
                  are able to perform various superpowers (such as telekinesis,
                  precognition, telepathy, and manipulation of physical energy).
                  The Force is wielded by two major knighthood orders at
                  conflict with each other: the Jedi, who act on the light side
                  of the Force through non-attachment and arbitration, and the
                  Sith, who use the dark side by manipulating fear and
                  aggression. The latter's members are intended to be limited to
                  two: a master and their apprentice.
                </p>
              </div>

              <Logo />
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
