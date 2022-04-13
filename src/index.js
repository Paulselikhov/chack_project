import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './store/index';




ReactDOM.render(
  <Provider store = {store}> {/* Подключаем компонент из модуля react-redux */}
          <App/>
       </Provider>,
document.getElementById('root')
);


