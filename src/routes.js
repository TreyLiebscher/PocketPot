import React from 'react';
import { Route, Switch } from 'react-router';

import PocketPot from './pages/PocketPot';
import SetupGame from './pages/SetupGame';

export default (
    <Switch>
        <Route exact path="/" component={PocketPot} />
        <Route exact path="/new-game" component={SetupGame} />
    </Switch>
);