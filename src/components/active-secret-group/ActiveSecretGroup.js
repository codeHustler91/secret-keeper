import React from 'react';
import './active-secret-group.css';

export default class ActiveSecretGroup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      secret: "",
      note: ""
    }
  }
  // componentDidMount() {
  //   this.setState({
  //     // secrets: [

  //     // ]
  //   });
  // }

  render() {
    let secrets;
    if (this.props.activeSecrets) {
      secrets = this.props.activeSecrets.map((secret, idx) => <li key={idx}>{secret}</li>);
    }
    return (
      <div className="active-secret-group">
        <h3>{this.props.activeGroup}</h3>
        <ul>
          {secrets}
        </ul>
      </div>
    );
  }
}