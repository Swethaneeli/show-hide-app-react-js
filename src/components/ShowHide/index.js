// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {firstClicked: false, lastClicked: false}

  onFirstnameClicked = () => {
    this.setState(prevState => ({firstClicked: !prevState.firstClicked}))
  }

  onLastnameClicked = () => {
    this.setState(prevState => ({lastClicked: !prevState.lastClicked}))
  }

  firstName = () => {
    const {firstClicked} = this.state

    return firstClicked && <p className="name">Joe</p>
  }

  lastName = () => {
    const {lastClicked} = this.state

    return lastClicked && <p className="name">Jonas</p>
  }

  render() {
    const firstname = this.firstName()

    const lastname = this.lastName()

    return (
      <div className="bg-container">
        <h1 className="main-heading">Show/Hide</h1>
        <div className="show-hide-container">
          <div className="first-name-container">
            <button
              className="button"
              type="button"
              onClick={this.onFirstnameClicked}
            >
              Show/Hide Firstname
            </button>
            {firstname}
          </div>
          <div className="first-name-container">
            <button
              className="button"
              type="button"
              onClick={this.onLastnameClicked}
            >
              Show/Hide Lastname
            </button>
            {lastname}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
