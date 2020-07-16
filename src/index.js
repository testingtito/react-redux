import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk'

// Create a store + apply the middleware inside this store.
// applyMiddleware can take in a list of middleware and it turns it into a store enhancer.
// By applying this thunk middleware, this is now enhancing our store with extra 
// functionality. And that functionality is how we're going to be able to return a function 
// inside of our action creators which can then interact with an API.
const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

