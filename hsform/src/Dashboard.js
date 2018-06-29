import React, { Component } from 'react';
// import './Dashboard.css';
import Box from './Box.js';

class Dashboard extends Component {
  // constructor(props) {
  //   super(props);
  // }


  render() {
    return (
      <div className="Dashboard">
        {
          this.props.fields !== undefined ?

          this.props.fields.map((field, idx) => (
            <Box
              key={idx}
              field={field}
            />
          ))

          :

          <div></div>
        }
      </div>
    );
  }
}


export default Dashboard;
