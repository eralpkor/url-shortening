import React from 'react';
import './Shortener.css';

class Shortener extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        link: ''
      }
  }
  handleClick = (event) => {
    this.setState({ url: event.target.value})
  }
  render(){
    return(
      <div className='Shortener'>
        <div className="Shortener-search">
          <form onSubmit={this.handleClick}>
            <input type='submit' value={this.state.value}></input>
          </form>
        </div>
        <h1>Hello</h1>
      </div>
    )
  }
}

export default Shortener;