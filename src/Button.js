import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

class Button extends Component {

    constructor() {
        super();
    }

    render() {


        return (
            <button onClick={this.props.click}>
                {this.props.name}
            </button>
        )
    }
}

export default Button