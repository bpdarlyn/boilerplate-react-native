import React, {Component} from "react";
import NavigationService from "./utils/navigator";
import NavigatorManager from "./config/navigation-flows/stackEntryPoint"

class Screen extends Component {
    render() {
        return (
            <NavigatorManager ref={navigatorRef => {
                NavigationService.setTopLevelNavigator(navigatorRef);
            }}/>
        );
    }
}


export default Screen;
