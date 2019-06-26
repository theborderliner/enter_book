import React, {Component} from 'react';
import './App.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import ChooseView from "./views/chooseView"
import UniversityView from "./views/universityView"

class App extends Component {
    constructor() {
        super();
        this.state = {
            logoUrl: null,
            choosenUniversity: null,
            universityTitle: null,

            display: "choose"
        };
    }

    goFunc = (logo, title) => {
        this.setState({
            logoUrl: logo,
            universityTitle: title
        });

        document.getElementById("ChooseView").style.marginLeft = "-4000px";
        document.getElementById("UniversityView").style.marginLeft = "0";
        document.getElementById("returnBack").style.opacity = "1";
        document.getElementById("returnBack").style.cursor = "pointer";
    };

    back = () => {
        document.getElementById("ChooseView").style.marginLeft = "0";
        document.getElementById("UniversityView").style.marginLeft = "200%";
        document.getElementById("returnBack").style.opacity = "0";
        document.getElementById("returnBack").style.cursor = "auto";
    };

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
                <div id="ChooseView">
                    <ChooseView goFunc={this.goFunc}>
                    </ChooseView>
                </div>
                <div id="UniversityView">
                    <UniversityView title={this.state.universityTitle}
                                    logo={this.state.logoUrl}>
                    </UniversityView>
                </div>
                <div id="returnBack" onClick={this.back}>
                    <span>
                        &#8592;
                    </span>
                </div>
            </div>
        );
    }
}

export default App;