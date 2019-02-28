import routes from "./../routes"
import AuthLoading from "../../modules/middleware/AuthLoading";
import {createSwitchNavigator,createAppContainer} from "react-navigation";

// Import Every Stack Flow


const SwitchNavigator = createSwitchNavigator(
    {
        AuthLoading: routes.AuthLoading
    },
    {
        initialRouteName: "AuthLoading"
    }
);

export default createAppContainer(SwitchNavigator)