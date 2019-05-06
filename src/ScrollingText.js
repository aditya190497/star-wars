import React, { Component } from 'react'

export default class ScrollingText extends Component {
  constructor() {
    super()
    this.state = {
      isScrolling: true
    }
  }

  resetOnScroll = () => {
    this.setState({ isScrolling: false })
  }

  render() {
    return (
      <div className="description" onScroll={this.resetOnScroll}>
        <p className={this.state.isScrolling ? null : 'stop'}>
          The Star Wars franchise depicts the adventures of characters "A long
          time ago in a galaxy far, far away...." in which humans and many
          species of aliens (often humanoid) co-exist with robots, or "droids",
          who may assist them in their daily routines, and space travel between
          planets is common due to hyperspace technology. The rises and falls of
          different governments are chronicled throughout the saga: the
          democratic Republic is corrupted and overthrown by Sheev Palpatine,
          who establishes the Galactic Empire. The Empire is fought by the Rebel
          Alliance in a Galactic Civil War that spans several years. The
          surviving Rebellion gives rise to the New Republic, while the remnants
          of the Empire reform as the First Order and threaten to destroy the
          Republic. Heroes of the former rebellion lead the Resistance against
          the oppressive dictatorship. A mystical power known as "the Force" is
          described in the original film as "an energy field created by all
          living things ... that binds the galaxy together." Through training
          and meditation, those whom "the Force is strong with" are able to
          perform various superpowers (such as telekinesis, precognition,
          telepathy, and manipulation of physical energy). The Force is wielded
          by two major knighthood orders at conflict with each other: the Jedi,
          who act on the light side of the Force through non-attachment and
          arbitration, and the Sith, who use the dark side by manipulating fear
          and aggression. The latter's members are intended to be limited to
          two: a master and their apprentice.
        </p>
      </div>
    )
  }
}
