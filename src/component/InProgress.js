import React from 'react';

class InProgress extends React.Component {
  render() {
    return (
      <div className="row">
        {this.props.text}
        <div className="btn-next" onClick={this.props.setCompleteMethod} title="Set as Complete">
          <i className="arrow-right" />
        </div>
        <div className="btn-back" onClick={this.props.undoInProgressMethod} title="Revert to To-Do">
          <i className="arrow-left" />
        </div>
        <div className="btn-close" onClick={this.props.deleteMethod} title="Delete">x</div>
      </div>
    );
  }
}

export default InProgress;
