import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

class Down extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    handleClickDown() {
        this.setState({
            count: this.state.count - 1
        })
    }
    render() {
        return(
            <button onClick={this.handleClickDown.bind(this)}>
                Down
            </button>
        )
    }
}

export default Down