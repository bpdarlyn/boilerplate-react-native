import React, { Component } from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';

import Login from './modules/Login/Login';
import Authentication from './modules/Login/Authentication';
import SignUpPhone from './modules/Login/SignUpPhone';
import Signup from './modules/Login/Signup';

export default class Routes extends Component<{}> {
	render() {
		return(
			<Router>
			    <Stack key="root" hideNavBar={true}>
			      <Scene key="authentication" component={Authentication} title="Authentication" initial={true}/>
						<Scene key="signUpPhone" component={SignUpPhone} title="SignUpPhone" />
						<Scene key="login" component={Login} title="Login" />
			      <Scene key="signup" component={Signup} title="Register"/>
			    </Stack>
			 </Router>
			)
	}
}