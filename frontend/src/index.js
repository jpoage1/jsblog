import React from 'react';
import ReactDOM from 'react-dom';
import { CookiesProvider } from 'react-cookie';
import './google-fonts.css';
import './reset.css';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import Header from './Modules/Main/Header'
import Body from './Modules/Main/Body'
import Footer from './Modules/Main/Footer'

ReactDOM.render(
  <CookiesProvider>
        <Header />
        <Body />
        <Footer />
  </CookiesProvider>, document.getElementById('root'));

registerServiceWorker();