'use strict'

const expect = require('chai').expect
const Game = require('../game.js')

describe('Game', () => {
  it('should pass', () => {
    expect(true).to.be.true;
  })

  it('should access game', () => {
    expect(Game).not.to.be.undefined;
  })
})
