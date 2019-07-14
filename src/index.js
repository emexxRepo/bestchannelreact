import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Checkout from './components/Admin/Checkout';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter,Route } from 'react-router-dom';
import Dashboard from './components/pages/Dashboard';
import Login from './components/pages/Login';
import LoginCo from './components/pages/LoginCo';
import App from './App';
import Influencer from './components/pages/Influencer';
import axios from 'axios';
import Opportunities from './components/pages/Oppurtunities';
import Companies from './components/pages/Companies';

axios.defaults.headers.common = {
    "Authorization": "Bearer " + localStorage.getItem('token'),
    "Accept": "application/json"
};

const router = (
    <BrowserRouter>
        <Route exact path="/" component={App}></Route>
        <Route exact path="/admin/login" component={Login}></Route>
        <Route exact path="/admin/login/co" component={LoginCo}></Route>
        <Route exact path="/admin/dashboard" component={Dashboard}></Route>
        <Route exact path="/admin/opportunities" component={Opportunities}></Route>
        <Route exact path="/admin/companies" component={Companies}></Route>
        <Route exact path="/register/influencer" component={Checkout}></Route>
        <Route exact path="/admin/influencers" component={Influencer}></Route>
    </BrowserRouter>
);

ReactDOM.render(router, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
