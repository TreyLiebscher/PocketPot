import React from 'react';
import { Route, Switch } from 'react-router';

import PocketPot from './pages/PocketPot';
import SetupGame from './pages/SetupGame';
import SetChips from './pages/SetChips';
import Table from './pages/Table';

export default (
    <Switch>
        <Route exact path="/" component={PocketPot} />
        <Route exact path="/new-game" component={SetupGame} />
        <Route exact path="/set-chips" component={SetChips} />
        <Route exact path="/active-game" component={Table} />
    </Switch>
);