import React from 'react';
import PropTypes from "prop-types";
import "./styles/universityCard.css";
// import "../img/hse.jpg"

import {Card} from 'primereact/card';
import {Sidebar} from 'primereact/sidebar';

class UniversityCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    onClick = () => {
        this.props.goFunc(this.props.src, this.props.title);
    };

    render() {
        return (
            <div className="universityCardMainContainer" onMouseEnter={this.over} onMouseLeave={this.out}>
                <div className="universityCardLogoContainer"
                     style={{
                         backgroundImage: `url(${this.props.src})`
                     }}>
                </div>
                <div className="universityCardTitleContainer">
                    <span>
                        {this.props.title}
                    </span>
                </div>
                <div className="universityCardLogoDarker"></div>
                <div className="universityCardSidebar">
                    <div className="universityCardSidebarButton" onClick={this.onClick}>
                        <a style={{textDecoration: "none", decoration: "none"}}>
                            Списки
                        </a>
                    </div>
                    <div className="universityCardSidebarButton">
                        <a style={{textDecoration: "none", decoration: "none"}}
                           href={this.props.web}>
                            Сайт
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

UniversityCard.propTypes = {
    title: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    goFunc: PropTypes.func.isRequired,
    web: PropTypes.string
};

export default UniversityCard;