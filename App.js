import React from 'react';
import {Provider} from 'react-redux';
import Screen from './src/Screen';
import {store,persistor} from './src/stores/configureStore';
import {PersistGate} from "redux-persist/lib/integration/react";
import ProgressBar from "./src/components/ProgressBar/ProgressBar";

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Provider store={store}>
                <PersistGate loading={<ProgressBar loading={true}/>} persistor={persistor}>
                    <Screen/>
                </PersistGate>
            </Provider>

        )
    }
}

export default App;