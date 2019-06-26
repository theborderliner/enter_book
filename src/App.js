import React, {Component} from 'react';
import {Button} from 'primereact/button';
import logo from './logo.svg';
import './App.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import ChooseView from "./views/chooseView"

class App extends Component {

    constructor() {
        super();
        this.state = {count: 0};
        this.increment = this.increment.bind(this);
    }

    increment() {
        this.setState({count: this.state.count + 1});
    }

    render() {
        return (
            <div className="mainContainer">
                <ChooseView></ChooseView>
            </div>
        );
    }
}

export default App;