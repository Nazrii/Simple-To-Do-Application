import React from 'react';

class Complete extends React.Component {
  render() {
    return (
      <div className="row">
        {this.props.text}
        <div className="btn-back" onClick={this.props.undoCompleteMethod} title="Revert to In Progress">
          <i className="arrow-left" />
        </div>
        <div className="btn-close" onClick={this.props.deleteMethod} title="Delete">x</div>
      </div>
    );
  }
}

export default Complete;
