import React from "react";
import { Router, Route, Switch } from 'react-router-dom';
import createBrowserHistory from "history/createBrowserHistory";


import { Home, Header, RegisterForm } from 'Components'

export const history = createBrowserHistory();
const AppRouter = () => {
    return (
        <Router history={history}>
            <div>
                <Header />
                <Switch>
                    <Route path="/" component={Home} exact={true} />
                    <Route path="/register" component={RegisterForm} />
                </Switch>
            </div>
        </Router>
    )
}

export default AppRouter;