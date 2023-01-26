import React from "react";
import "./social.css";

export default class SocialPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      secret: "",
      claps: 0,
      boos: 0
    }
  }

  componentDidMount() {
    this.setState({
      secret: "I like to chew on my toenails",
      claps: 52,
      boos: 97
    });
  }
  
  render() {
    return (
      <div className="social-panel">
        <h1>Social Secrets</h1>
        <div className="social-secret">
          <p>"{this.state.secret}"</p>
          <button>{this.state.claps} Claps</button>
          <button>{this.state.boos} Boos</button>
        </div>
        <div className="social-btns">
          <button>Random</button>
          <button>Most Aplauded</button>
          <button>Most Hated</button>
        </div>
      </div>
    );
  }
}