import React from 'react';
import ReactDOM from 'react-dom';

import { makeStyles } from "@material-ui/core/styles";
const axios = require('axios').default;
const fs = require('fs').default;
const HOST = 'http://' + window.location.host;

export const App = function(props) {
    
    // styles
    const useStyles = makeStyles({
        root: {
            display: 'flex',
        }});
    const classes = useStyles();
    
    
    // core implementation
    const [value, setValue] = React.useState('');
    
    var makeRequest = function(moves) {
        const data = 'this is data';
        const json = JSON.stringify({ data });
        const params = {headers: {'Content-Type': 'application/json'}};
        axios.post(HOST + '/api/endpoint', json, params)
            .then(response => {
                setValue(response.data.message);
        });
    };
    
    // render
    return (
        <div className={classes.root}>
            This is the app
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('app'));
