import React from 'react';
import ActiveSecretGroup from '../active-secret-group/ActiveSecretGroup';
import './user-secrets.css';

export default class UserSecrets extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userSecrets: {},
      activeGroup: "",
      activeSecretIdx: 0
    }
  }
  componentDidMount() {
    this.setState({
      userSecrets: {
        "Family": [
          ["My mom is a witch", "test note"],
          ["My dad is a wizard", "blah wizard"],
          ["I am a wizard", "keep this on the DL"],
          ["My sister is a witch", "I'm jealous"]
        ],
        "Work": [
          ["My boss is a jerk", "He snorts cocaine in the bathroom"],
          ["I have a crush on my coworker", "I can't stop staring when she wears sweaters"],
          ["I hate mondays", "Mostly casue Francy is there"]
        ],
        "Friends": [
          ["Sarah got an abortion when she was 16", "no shame"],
          ["I have a crush on Sarah", "past mistakes and all"],
          ["John killed someone drunk driving", "don't know how he sleeps at night"],
          ["John hates his wife, sarah", "they are such a mess"],
        ],
        "Government": [
          ["I am a spy", "don't rat me out google!"],
          ["I didn't do my taxes", "but i make now money"],
          ["I want to overthrow the government", "socialist revolution!"]
        ]
      },
      activeGroup: "Family"
    });
  }

  handleChange = (e) => {
    const userSecretsCopy = structuredClone(this.state.userSecrets);
    if (e.target.name === "note") {
      userSecretsCopy[this.state.activeGroup][this.state.activeSecretIdx][1] = e.target.value;
    } else {
      const idx = e.target.name;
      userSecretsCopy[this.state.activeGroup][idx][0] = e.target.value;
    }
    this.setState({
      userSecrets: userSecretsCopy
    });
  }
  handleSecretClick = (e) => {
    const idx = parseInt(e.target.name);
    this.setState({activeSecretIdx: idx});
  }
  makeGroupActive(group) {
    this.setState({
      activeGroup: group,
      activeSecretIdx: 0
    });
  }

  render() {
    const groups = Object.keys(this.state.userSecrets)
      .map((secretGroup, idx) => {
        let styles = "secret-group-li";
        if (secretGroup === this.state.activeGroup) {
          styles += " active";
        }
        return <li key={idx} className={styles}
            onClick={() => this.makeGroupActive(secretGroup)}>
            {secretGroup}
          </li>
      });

    return (
      <div className="user-secrets">
        <div className="secret-groups-list">
          <h3>Secret Groups</h3>
          <ul className='secret-groups-ul'>
            {groups}
          </ul>
        </div>
        <ActiveSecretGroup
          handleChange={this.handleChange}
          handleSecretClick={this.handleSecretClick}
          activeSecretIdx={this.state.activeSecretIdx}
          activeSecrets={this.state.userSecrets[this.state.activeGroup]}
          activeGroup={this.state.activeGroup} />
      </div>
    );
  }
}