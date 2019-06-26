import React, {Component} from 'react';
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
                <script src="https://unpkg.com/react/umd/react.production.js" crossOrigin/>
                <script
                    src="https://unpkg.com/react-dom/umd/react-dom.production.js"
                    crossOrigin
                />
                <script
                    src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
                    crossOrigin
                />
                <link
                    rel="stylesheet"
                    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                    crossOrigin="anonymous"
                />
                <ChooseView></ChooseView>
            </div>
        );
    }
}

export default App;