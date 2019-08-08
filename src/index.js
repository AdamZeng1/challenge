import React, {Component, useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

// using the UI Card from ant design
import {Card} from 'antd'
import 'antd/dist/antd.css';


// the data come from the json beautify, generate from the console.log from the original project

// there are some problems need to be solved:
// 1. every nested skill and container contain different arguments(skill doesn't have policy but params and name),
// if we need to create different components
// for each skill and container or just use the component created by Daniel ???!!!

// 2.
let data1 = [
    {
        "type": "container",
        "policy": "sequence",
        "description": "concurrence2.1",
        "id": "ce1071f4-523c-4695-ae51-ca04f89a25e8",
        "states": [
            {
                "type": "container",
                "policy": "sequence",
                "description": "Iterator",
                "id": "cb6ef8b8-ad9c-44f2-94b1-b5817d01b025",
                "states": [
                    {
                        "type": "skill",
                        "name": "sleep",
                        "robot": "0f5e357a-a672-4acc-aaf6-833c0351bcb0",
                        "description": "123",
                        "params": {
                            "sleep_time": 0
                        },
                        "id": "613c00f9-431a-468d-a21a-fc9b2639edc5"
                    },
                    {
                        "type": "container",
                        "policy": "sequence",
                        "description": "123",
                        "id": "30ee2e4f-018b-4a33-bcbe-82e4a9ad1ae6",
                        "states": [
                            {
                                "type": "skill",
                                "name": "show_and_tell",
                                "robot": "0f5e357a-a672-4acc-aaf6-833c0351bcb0",
                                "description": "Show And Tell",
                                "params": {
                                    "text": "great\n",
                                    "animated": true,
                                    "mode": "contextual",
                                    "duration": 5,
                                    "disable_wait_for_finish": false
                                },
                                "id": "e4c4c0e5-e9ab-4ff9-8733-d8425814c559"
                            }
                        ]
                    }
                ]
            }
        ]
    }
];

// used for params
const params = ({paramObject, dKey, judge}) => {
    return (
        dKey === judge && <Card title="params">
            // m[dKey]
            {Object.keys(paramObject).map((pKey, i) => {
                return (
                    <p key={pKey}>{pKey}: {paramObject[pKey]}</p>
                )
            })}
        </Card>
    )
};

const Menu = ({data}) => {
    return (
        <ul>
            {data.map((m, i) => {
                return (<Card key={i} title={m.type} extra={<a href="#">More</a>} style={{width: 300}}>

                    {Object.keys(m).map((dKey, i) => {
                        // dKey is just a normal value not array or object
                        const condition = typeof m[dKey] !== "object";
                        // join content dKey and value of dKey
                        const content = (<p>{dKey + ": " + m[dKey]}</p>);
                        // render object params
                        const params = (<param paramObject={m[dKey]} dKey={dKey} judge="params"/>);

                        return (
                            <div key={dKey + i}>

                                {/*//content will render all the keys and values except states and params*/}
                                {/*//params will render all the keys and values contented in params object.*/}
                                {/*// render content if value of dKey is just a value not array or object*/}
                                {condition ? content : params}
                            </div>

                        )
                    })}
                    {m.states && <Menu data={m.states}/>}
                </Card>);
            })}
        </ul>
    );
};

const App = () => (
    <div>
        <h2>Start editing to see some magic happen {'\u2728'}</h2>
        <Menu data={data1}/>
    </div>
);

ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
