import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './components/App';

// ReactDOM.render(<App />, document.getElementById('app'));

if (typeof window !== 'undefined') {
  ReactDOM.render(<HashRouter><App /></HashRouter>, document.getElementById('app'));
}
