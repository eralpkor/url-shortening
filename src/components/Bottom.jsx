import React from 'react';
import './Bottom.css';

import image_one from '../images/icon-brand-recognition.svg'

class Bottom extends React.Component {
  render() {
    return (
      <div className="Middle">
        <div className="Middle-top">
          <div className="Middle-main">
            <h1>Advanced Statistics</h1>
            <h4>Track how your links are performing across the web with our advanced statistics dashboard.</h4>
          </div>
          <div className="Middle-three-sum">
            <div className="Middle-three-sum-one">
              <div className="Middle-image-one">
                <img src={image_one} alt='brand recognition' />
              </div>
              <h4>Brand Recognition</h4>
              <h6>Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.</h6>
            </div>
            <div className="Middle-three-sum-two">
              <h4>Detailed Records</h4>
              <h6>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</h6>
            </div>
            <div className="Middle-three-sum-three">
              <h4>Fully Customizable</h4>
              <h6>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</h6>
            </div>
            

          </div>












        </div>
        <div className="Bottom">
          <h1>Boost your links today</h1>
          <button>Get Started</button>
        </div>
      </div>
      
    )
  }
}

export default Bottom;