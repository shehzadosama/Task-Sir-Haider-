import React, { Component } from 'react';
import { Platform } from 'react-native';
import { Actions, Router, Scene, Stack } from 'react-native-router-flux';
import Test from './components/test';
import TimeUp from './components/timeup';
import Correct from './components/correct';
import Wrong from './components/wrong';
import Scoreboard from './components/scoreboard';





/*
	Key has to be unique
	Only one entry can have the initial prop
	
*/

class Route extends Component {
    state = {
        hideNavBar: Platform.select({
            ios: true,
            android: true
        })
    }
    render() {
        return (
            <Router>
                <Scene key="root">
                    <Scene key="Test"
                        component={Test}
                        title="Test"
                        hideNavBar={true}
                        initial
                    />
                    {/* <Scene key="TimeUp"
                        component={TimeUp}
                        title="TimeUp"
                        hideNavBar={true}
                        initial
                    /> */}
                    {/* <Scene key="Wrong"
                        component={Wrong}
                        title="Wrong"
                        hideNavBar={true}
                        initial
                    /> */}
                    {/* <Scene key="Correct"
                        component={Correct}
                        title="Correct"
                        hideNavBar={true}
                        initial
                    /> */}
                    {/* <Scene key="Scoreboard"
                        component={Scoreboard}
                        title="Scoreboard"
                        hideNavBar={true}
                        initial
                    /> */}



                </Scene>

            </Router>
        )
    }
}

export default Route;