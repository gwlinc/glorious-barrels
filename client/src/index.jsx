import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

// ReactDOM.render(<App />, document.getElementById('app'));


if (typeof window !== 'undefined') {
  ReactDOM.render(<App />, document.getElementById('app'));
}
