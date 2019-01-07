import React , { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import SwitchRoutes from './SwitchRoutes'

import routes from './../routes';

class Content extends Component {
  state = { };
  render() {
    return (
      <div className="content">
      &nbsp;
        <BrowserRouter>
          <SwitchRoutes routes={routes} />
        </BrowserRouter>
      </div>
    );
  }
}
export default Content;