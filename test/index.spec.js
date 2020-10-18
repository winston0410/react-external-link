import React from 'react'
import ReactDOM from 'react-dom'
import ExternalLink from '../src/index.js'
const chai = require('chai')
const expect = chai.expect
chai.use(require('chai-dom'))
require('global-jsdom')()

let rootContainer

beforeEach(function () {
  rootContainer = document.createElement('div')
  document.body.appendChild(rootContainer)
})

afterEach(function () {
  document.body.removeChild(rootContainer)
  rootContainer = null
})

describe('Anchor heading testing', function () {
  it('should not fail if no data is passed int as question', function () {
    ReactDOM.render(<ExternalLink href="#" />, rootContainer)

    const renderedBlock = rootContainer.querySelector('a')

    expect(renderedBlock).to.have.attribute('target', '_blank')
    expect(renderedBlock).to.have.attribute('rel', 'noopener noreferrer')
    expect(renderedBlock).to.have.attribute('href', '#')
  })
})
