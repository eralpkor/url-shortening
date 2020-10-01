import React from 'react';
import './Footer.css';


class Footer extends React.Component {
  render() {
    return (
      <div className="Footer">
        <div className="Footer-inner">
          <div className="Footer-shortly">
            <h1>Shortly</h1>
          </div>
          <div className="Footer-features">
            <h4>Features</h4>
            <h6>Link Shortening</h6>
            <h6>Branded Links</h6>
            <h6>Analytics</h6>
          </div>
          <div className="Footer-resources">
            <h4>Resources</h4>
            <h6>Blog</h6>
            <h6>Developers</h6>
            <h6>Support</h6>
          </div>
          <div className="Footer-company">
            <h4>Company</h4>
            <h6>About</h6>
            <h6>Our Team</h6>
            <h6>Careers</h6>
            <h6>Contact</h6>
          </div>
          <div className="Footer-social">
            <i class="fa fa-facebook-official" aria-hidden="true"></i>
            <i class="fa fa-twitter" aria-hidden="true"></i>
            <i class="fa fa-pinterest-p" aria-hidden="true"></i>
            <i class="fa fa-instagram" aria-hidden="true"></i>
          </div>
        </div>
      </div>
      
    )
  }
}

export default Footer;

