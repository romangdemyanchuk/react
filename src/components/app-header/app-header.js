import React, {Component} from 'react';
import './app-header.css';
import logo from '../images/logo1.png';

export default class AppHeader extends Component {
    state = {
        menuIsOpen:false
    };
    onMenuClick = () => {
        this.setState(({menuIsOpen}) => {
                return {
                    menuIsOpen:!menuIsOpen
                };
        });
    };
    render() {
        return (
            <header className="jumbotron jumbotron-fluid jumbotron-custom">
                <div className="mask">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="nav">
                                    <div className="logo">
                                        <img src={logo} alt="logo" />
                                    </div>
                                    <div className="menu-btn"
                                         onClick={this.onMenuClick}>
                                        <span/>
                                    </div>
                                    <ul className="header-menu" style={{display: this.state.menuIsOpen ? 'block' : 'none'}}>
                                        <li className="work">Work</li>
                                        <li>Services</li>
                                        <li>About</li>
                                        <li>Tutorials</li>
                                        <li className="contact">Contact</li>
                                    </ul>
                                </div>
                                <div className="header-text">
                                    <div className="header-title">Lingua.Live
                                    </div>
                                    <div className="header-subtitle">Helping language learners grow throught conversation
                                        with native speakers
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
};