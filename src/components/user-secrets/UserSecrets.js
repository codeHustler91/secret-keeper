import React from 'react';
import ActiveSecretGroup from '../active-secret-group/ActiveSecretGroup';
import './user-secrets.css';

export default class UserSecrets extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userSecrets: {},
      activeGroup: ""
    }
  }
  componentDidMount() {
    this.setState({
      userSecrets: {
        "Family": [
          "My mom is a witch",
          "My dad is a wizard",
          "I am a wizard",
          "My sister is a witch"
        ],
        "Work": [
          "My boss is a jerk",
          "I have a crush on my coworker",
          "I hate mondays"
        ],
        "Friends": [
          "Sarah got an abortion when she was 16",
          "I have a crush on Sarah",
          "John killed someone drunk driving",
          "John hates his wife, sarah",
        ],
        "Government": [
          "I am a spy",
          "I didn't do my taxes",
          "I want to overthrow the government"
        ]
      },
      activeGroup: "Family"
    });
  }

  render() {
    const groups = Object.keys(this.state.userSecrets)
      .map((secretGroup, idx) => <li key={idx}>{secretGroup}</li>);

    return (
      <div className="user-secrets">
        <div className="secret-groups-list">
          <h3>Secret Groups</h3>
          <ul>
            {groups}
          </ul>
        </div>
        <ActiveSecretGroup 
          activeSecrets={this.state.userSecrets[this.state.activeGroup]}
          activeGroup={this.state.activeGroup} />
      </div>
    );
  }
}