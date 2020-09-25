import React from 'react';
import './Shortener.css';

class Shortener extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        link: ''
      }
  }
  handleChange = (event) => {
    this.setState({ url: event.target.value})
  }

  handleSubmit = (event) => {
    alert('This url was submitted: ' + this.state.url);
    this.setState({url: ''})

    event.preventDefault();
  }

  render(){
    return(
      <div className='Shortener'>
        <div className="Shortener-search">
          <form  onSubmit={this.handleSubmit}>
            <input 
              className='Shortener-form'
              placeholder='Shorten a link here...'
              type='text' name='name'
              value={this.state.url || ''}
              onChange={this.handleChange}
            />
            <input  className='Shortener-button' type='submit' value='Shorten it!'></input>
            {/* <button className='Shortener-button' type='submit' >Shorten it!</button> */}
          </form>
        </div>
      </div>
    )
  }
}

export default Shortener;