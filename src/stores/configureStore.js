import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import logger from 'redux-logger';

import rootReducer from '../reducers/rootReducer';

const persistConfig = {
    key: "rootRNAtyClient",
    storage: storage,
    stateReconciler: autoMergeLevel2,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

let middleware = [thunk];

middleware = [...middleware, logger];

export const store = createStore(
    persistedReducer,
    applyMiddleware(...middleware)
);

export const persistor = persistStore(store);

// // noinspection JSAnnotator
// export default function configureStore(onCompletion: () => void): any {
//     const enhancer = compose(
//         applyMiddleware(thunk),
//     );
//     const persistedReducer = persistReducer(persistConfig, rootReducer);
//     let middleware = [thunk];
//     middleware = [...middleware, logger];
//
//     const pReducer = persistReducer(persistConfig, rootReducer);
//     let store = createStore(pReducer, enhancer);
//     let persistor = persistStore(store, onCompletion);
//     return {
//         store,persistor
//     };
// }