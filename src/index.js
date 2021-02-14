import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import store from './redux/store';
import Navbar from './components/navbar';
import Popular from './components/categories/items/popular';
import Rated from './components/categories/items/rated';
import Trend from './components/categories/items/trend';
import Detail from './components/categories/detailShow';
import './App.css';

const Root = (
    <Provider store={store}>
        <Router>
            <Navbar />
            <Switch>
                <Route path='/popular/page/:page' component={Popular} />
                <Route path='/mejor-valorados/page/:page' component={Rated} />
                <Route path='/tendencia/page/:page' component={Trend} />
                <Route path='/detalle/:id' component={Detail} />
                <Redirect from="/" to="/popular/page/1" />
            </Switch>
        </Router>
    </Provider>
);

ReactDOM.render(Root, document.getElementById('root'));
