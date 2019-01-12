import React, { Component } from 'react';

import ChipValueForm from '../components/ChipValueForm';

class SetChips extends React.Component {

    render(){
        return (
            <div>
                <h1>Set player's starting chip amount and values</h1>
                <ChipValueForm />
            </div>
        )
    }
}

export default SetChips;