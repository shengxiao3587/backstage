import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import CoreLayout from './coreLayout';

const route = (
  <BrowserRouter>
    <div style={{ height: '100%' }}>
      <Route path='/' component={CoreLayout} />
    </div>
  </BrowserRouter>
);

ReactDOM.render(route, document.getElementById('app'));
