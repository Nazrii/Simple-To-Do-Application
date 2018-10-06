import React from 'react';
import Todo from './component/Todo';
import InProgress from './component/InProgress';
import Complete from './component/Complete';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      todo: [],
      inProgress: [],
      complete: []
    };
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.addText = this.addText.bind(this);
  }

  updateText(e) {
    this.setState({ text: e.target.value });
  }

  handleKeyPress(e) {
    if(e.key === 'Enter') {
      let todoArray = this.state.todo;
      todoArray.push(this.state.text);
      this.setState({ text: '' });
    }
  }

  addText() {
    if(this.state.text === ''){return}
    let todoArray = this.state.todo;
    todoArray.push(this.state.text);
    this.setState({ text: '' });
    this.textInput.focus();
  }

  setInProgress(index){
    let todoArray = this.state.todo;
    let inProgressArray = this.state.inProgress;
    inProgressArray.push(todoArray[index]);
    todoArray.splice(index, 1);
    this.setState({
      todo:todoArray,
      inProgress:inProgressArray
    });
  }

  setComplete(index){
    let inProgressArray = this.state.inProgress;
    let completeArray = this.state.complete;
    completeArray.push(inProgressArray[index]);
    inProgressArray.splice(index, 1);
    this.setState({
      inProgress:inProgressArray,
      complete:completeArray
    });
  }

  undoInProgress(index){
    let todoArray = this.state.todo;
    let inProgressArray = this.state.inProgress;
    todoArray.push(inProgressArray[index]);
    inProgressArray.splice(index, 1);
    this.setState({
      todo:todoArray,
      inProgress:inProgressArray
    });
  }

  undoComplete(index){
    let inProgressArray = this.state.inProgress;
    let completeArray = this.state.complete;

    inProgressArray.push(completeArray[index]);
    completeArray.splice(index, 1);
    this.setState({
      inProgress:inProgressArray,
      complete:completeArray
    });
  }

  deleteText(index){
    let todoArray = this.state.todo;
    todoArray.splice(index, 1);
    this.setState({ todos:todoArray });
  }

  deleteInProgress(index){
    let inProgressArray = this.state.inProgress;
    inProgressArray.splice(index, 1);
    this.setState({ inProgress:inProgressArray });
  }

  deleteComplete(index){
    let completeArray = this.state.complete;
    completeArray.splice(index, 1);
    this.setState({ complete:completeArray });
  }

  render() {
    let todo = this.state.todo.map((val, key) => {
      return <Todo key={key} text={val}
      deleteMethod={ () => this.deleteText(key) }
      setInProgressMethod={ () => this.setInProgress(key) }/>
    })

    let inProgress = this.state.inProgress.map((val, key) => {
      return <InProgress key={key} text={val}
      deleteMethod={ () => this.deleteInProgress(key) }
      undoInProgressMethod={ () => this.undoInProgress(key) }
      setCompleteMethod={ () => this.setComplete(key) }
      />
    })

    let complete = this.state.complete.map((val, key) => {
      return <Complete key={key} text={val}
      deleteMethod={ () => this.deleteComplete(key) }
      undoCompleteMethod={ () => this.undoComplete(key) }
      />
    })

    return (
      <div className="App">
        <div className="App-header">
          Simple To-Do Application <br />
          <input type="text"
            ref={((input) => {this.textInput = input})}
            className="input"
            value={this.state.text}
            onChange={text => this.updateText(text)}
            onKeyPress={this.handleKeyPress}
            />
          <button className="btn-add" onClick={this.addText}>+</button>
        </div>
        <section className="columns">
          <div className="column">
            <strong className="title">To-Do {this.state.todo.length === 0?'':'('+this.state.todo.length+')'}</strong>
            {todo}
          </div>
          <div className="column">
            <strong className="title">In Progress {this.state.inProgress.length === 0?'':'('+this.state.inProgress.length+')'}</strong>
            {inProgress}
          </div>
          <div className="column">
            <strong className="title">Completed {this.state.complete.length === 0?'':'('+this.state.complete.length+')'}</strong>
            {complete}
          </div>
        </section>
      </div>
    );
  }
}

export default App;
