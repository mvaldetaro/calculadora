import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calculator from './main/Calculator';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Calculator />, 
    document.getElementById('root'))
;

//https://stackoverflow.com/questions/47953732/what-does-registerserviceworker-do-in-react-js
registerServiceWorker();
