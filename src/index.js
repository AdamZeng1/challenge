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
        "type":"container",
        "policy":"sequence",
        "description":"concurrence2.1",
        "id":"ce1071f4-523c-4695-ae51-ca04f89a25e8",
        "states":[
            {
                "type":"container",
                "policy":"sequence",
                "description":"Iterator",
                "id":"cb6ef8b8-ad9c-44f2-94b1-b5817d01b025",
                "states":[
                    {
                        "type":"skill",
                        "name":"sleep",
                        "robot":"0f5e357a-a672-4acc-aaf6-833c0351bcb0",
                        "description":"123",
                        "params":{
                            "sleep_time":0
                        },
                        "id":"613c00f9-431a-468d-a21a-fc9b2639edc5"
                    },
                    {
                        "type":"container",
                        "policy":"sequence",
                        "description":"123",
                        "id":"30ee2e4f-018b-4a33-bcbe-82e4a9ad1ae6",
                        "states":[
                            {
                                "type":"skill",
                                "name":"show_and_tell",
                                "robot":"0f5e357a-a672-4acc-aaf6-833c0351bcb0",
                                "description":"Show And Tell",
                                "params":{
                                    "text":"great\n",
                                    "animated":true,
                                    "mode":"contextual",
                                    "duration":5,
                                    "disable_wait_for_finish":false
                                },
                                "id":"e4c4c0e5-e9ab-4ff9-8733-d8425814c559"
                            }
                        ]
                    }
                ]
            }
        ]
    }
];



const Menu = ({data}) => {
    return (
        <ul>

            {data.map((m,i) => {
                return (<Card title={m.type} extra={<a href="#">More</a>} style={{width: 300}}>
                    <p>policy: {m.policy}</p>
                    <p>description: {m.description} </p>
                    <p>id: {m.id}</p>
                    { m.states&& <Menu key={i} data={m.states}/>}
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
