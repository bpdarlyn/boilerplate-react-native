import React, {Component} from "react";
import NavigationService from "./utils/navigator";
import NavigatorManager from "./config/navigation-flows/stackEntryPoint"
import SplashScreen from 'react-native-splash-screen'

class Screen extends Component {
    componentDidMount(): void {
        SplashScreen.hide();
    }

    render() {
        return (
            <NavigatorManager ref={navigatorRef => {
                NavigationService.setTopLevelNavigator(navigatorRef);
            }}/>
        );
    }
}


export default Screen;
