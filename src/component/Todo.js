import React from 'react';

class Todo extends React.Component {
  render() {
    return (
      <div className="row">
        {this.props.text}
        <div className="btn-next" onClick={this.props.setInProgressMethod} title="Set as In Progress">
          <i className="arrow-right" />
        </div>
        <div className="btn-close" onClick={this.props.deleteMethod} title="Delete">x</div>
      </div>
    );
  }
}

export default Todo;
