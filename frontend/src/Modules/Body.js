import React , { Component } from 'react';

import Content from './Content'
import Sidebar from './Sidebar'

class Body extends Component {
  state = { };
  render() {
    return (
      <div className="body">
        <Content />
        <Sidebar />
      </div>
    );
  }
}
export default Body;