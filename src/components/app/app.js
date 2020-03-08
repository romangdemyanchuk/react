import React, {Component} from 'react';

import AppHeader from '../app-header';
import ProductScope from '../product-scope';
import SimpleSlider from '../slider';
import Process from '../process';
import Problem from '../problem';
import Cross from '../cross';

import './app.css';

export default class App extends Component {
    render() {
        return (
            <div className="todo-app">
                <AppHeader/>
                <ProductScope/>
                <SimpleSlider/>
                <Process/>
                <Problem/>
                <Cross/>
            </div>
        );
    }
};