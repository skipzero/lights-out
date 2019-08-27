import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Button from './Button.jsx';
import Store from './Store.js';

const store = new Store();
// import App from './App';

ReactDOM.render(<Button store={store}/>, document.getElementById('root'));
