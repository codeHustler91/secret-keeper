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
  // convert to functional component?

  render() {
    let secrets;
    if (this.props.activeSecrets) {
      secrets = this.props.activeSecrets.map((secret, idx) => {
        return (
          <input type="text" key={idx} name={idx}
            placeholder="type something..."
            value={secret}
            onChange={this.props.handleChange} />
        );
      });
    }

    return (
      <div className="active-secret-group">
        <div className='group-title'>
          <h3>{this.props.activeGroup}</h3>
          <button>Edit</button>
          <button>Delete Group</button>
        </div>
        <div className='secret-list'>
          {secrets}
        </div>
      </div>
    );
  }
}