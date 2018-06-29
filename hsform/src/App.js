import React, { Component } from 'react';
import './App.css';
import Dashboard from './Dashboard.js';
import SubmitBtn from './SubmitBtn.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.listRef = React.createRef();
    this.state = {
      submit_url: '',
      input_payload: {}
    };
  }

  componentDidMount() {
    fetch("https://raw.githubusercontent.com/hyperscience/interview-problems/master/taskRequest_1.json")
    .then(res => res.json())
    .then( data => {
      this.setState({
        submit_url: data.submit_url,
        input_payload: data.input_payload
      });
    })
  }


  render() {
    return (

      <div className="App">
        <h2>Form</h2>
        <div className="row">
          <div className="column left">
            <img src={this.state.input_payload.image} alt='form' style={imageStyle}></img>
          </div>
          <div className="column right">
            <Dashboard fields={this.state.input_payload.fields}/>
          </div>
        </div>
        <SubmitBtn url={this.state.submit_url} fields={this.state.input_payload.fields} />
      </div>
    );
  }
}

const imageStyle = {
  width: '80%',
  height: '80%'
}

export default App;
