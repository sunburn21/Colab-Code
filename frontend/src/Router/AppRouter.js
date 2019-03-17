import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Home, Header, RegisterForm } from 'Components'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route path="/" component={Home} exact={true} />
                    <Route path="/register" component={RegisterForm} />
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default AppRouter;