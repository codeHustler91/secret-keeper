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
    let note;
    if (this.props.activeSecrets) {
      secrets = this.props.activeSecrets.map((secretArr, idx) => {
        let styles = "secret-input";
        if (idx === this.props.activeSecretIdx) {
          styles += " active";
        }
        return (
          <input type="text" key={idx} name={idx}
            className={styles} placeholder="type something..." maxLength="60"
            value={secretArr[0]}
            onChange={this.props.handleChange}
            onClick={this.props.handleSecretClick} />
        );
      });
      note = <textarea placeholder="Add a note..." name="note" maxLength="140" cols="35"
        className='secret-note'
        value={this.props.activeSecrets[this.props.activeSecretIdx][1]}
        onChange={this.props.handleChange} />
    }

    return (
      <div className="active-secret-group">
        <div className='group-title'>
          <h3>{this.props.activeGroup}</h3>
          <button>Edit</button>
          <button>Delete Group</button>
        </div>
        <div className='secret-info'>
          <div className='secret-list'>
            {secrets}
          </div>
          {note}
        </div>
        <button>Save Changes</button>
      </div>
    );
  }
}