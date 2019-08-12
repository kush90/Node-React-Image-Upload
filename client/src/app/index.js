import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

import rootReducer from '../app/reducers/index';
import App from '../app/components/app';

const store=createStore(rootReducer,applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}><App></App></Provider>,document.getElementById('index'));
// module.hot.accept();