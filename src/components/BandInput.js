// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {

  state = {
    name: ''
  }

  handleChange = ev => {
    this.setState({
      name: ev.target.value
    })
  }

  handleSubmit = ev => {
    ev.preventDefault()
    this.props.addBand(this.state)
    this.setState({name: ''})
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' value={this.state.name} onChange={this.handleChange} />
          <input type='submit' />
        </form>
      </div>
    )
  }
}

export default BandInput;
