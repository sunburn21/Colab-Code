import React from "react";
import { Router, Route, Switch } from 'react-router-dom';
import createBrowserHistory from "history/createBrowserHistory";


import { Home, Header, RegisterForm, Task } from 'Components'

export const history = createBrowserHistory();
const AppRouter = () => {
    return (
        <Router history={history}>
            <div>
                <Header />
                <Switch>
                    <Route path="/" component={Home} exact={true} />
                    <Route path="/register" component={RegisterForm} />
                    <Route path="/task/:id" component={Task} />
                </Switch>
            </div>
        </Router>
    )
}

export default AppRouter;