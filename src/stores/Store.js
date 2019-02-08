import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as form } from 'redux-form';
import createSagaMiddleware from 'redux-saga';
import CONSTANTS from '../constants/Constants';
import funcionPrimaria from './Sagas/Sagas';
import signOutUser from '../services/Firebase';


const reducerPrueba = (state = [0], action) => {
    switch (action.type) {
      case 'AUMENTAR_REDUCER_PRUEBA':
        return [...state, 1];
      default:
        return state;
    }
  };
  
  const reducerSesion = (state = null, action) => {
    switch (action.type) {
      case CONSTANTS.ESTABLERCER_SESION:
        return action.usuario;
      case CONSTANTS.CERRAR_SESION:
        signOutUser
        return null;
      default:
        return state;
    }
  };
  

  
  
  const sagaMiddleware = createSagaMiddleware();
  
  const reducers = combineReducers({
    reducerSesion,
    reducerPrueba,
    form,
  });
  
  const store = createStore(reducers, applyMiddleware(sagaMiddleware));
  
  sagaMiddleware.run(funcionPrimaria);
  
  export default store;
  