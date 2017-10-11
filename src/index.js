import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter, Router } from 'react-router-dom';
import App from './containers/App';
import Home from './containers/Home';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/index';
import thunk from 'redux-thunk';

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
//second parameter is for google chrome extension tools(Redux)

const rootElement = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Route component={App}/>
                <Route path="/" component={Home}/>
            </div>
        </BrowserRouter>
    </Provider> 
, rootElement);