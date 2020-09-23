import React from "react";
import './Main.css';
import Illustration from "../images/illustration-working.svg";

class Main extends React.Component {
  render() {
    return (
      <div className="Main">
        <div className="Main-left">
          <h1>More than just shorter links</h1>
          <h4>
            Build your brand’s recognition and get detailed insights on how your links are performing.
          </h4>
          
          <button>Get Started</button>
        </div>
        <div className="Main-right">
          <img src={Illustration} alt="working on a desk" />
        </div>
      </div>
    );
  }
}

export default Main;
