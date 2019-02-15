import { takeEvery, call, select, put, all } from 'redux-saga/effects';
import { autenticacion, baseDeDatos } from '../../services/Firebase';
import CONSTANTS from '../../constants/Constants';

const registroEnFirebase = values =>
  autenticacion
    .createUserWithEmailAndPassword(values.correo, values.password)
    .then(success => success.toJSON());

const registroEnBaseDeDatos = ({ uid, email, nombre }) =>
  baseDeDatos.ref(`usuarios/${uid}`).set({
    nombre,
    email,
  });

function* sagaRegistro(values) {
  try {
    const registro = yield call(registroEnFirebase, values.datos);
    const { email, uid } = registro;
    const { datos: { nombre } } = values;
    // uid, email, nombre
    yield call(registroEnBaseDeDatos, { uid, email, nombre });
  } catch (error) {
    console.log(error);
  }
}

const saveData = (model_name, value) =>
    baseDeDatos
        .ref(`${model_name}/${value.id}`)
        .set(value);

function* sagaSaveData(name ,values){
  try {
    //const registro = yield call(registroEnFirebase, values.datos);
    //const { email, uid } = registro;
    //const { datos: { nombre } } = values;
    // uid, email, nombre
    yield call(saveData, name, values);
  } catch (error) {
    console.log(error);
  }
}
// LOGIN FACEBOOK
const loginEnFirebase = ({ correo, password }) =>
  autenticacion.signInWithEmailAndPassword(correo, password).then(success => success.toJSON());

function* sagaLogin(values) {
  try {
    const resultado = yield call(loginEnFirebase, values.datos);
  } catch (error) {
    console.log(error);
  }
}

// LOGIN PHONE
const loginEnFirebasePhone = ({ telefono }) =>
  autenticacion.signInWithPhoneNumber(telefono)
  .then(confirmResult => this.setState({ confirmResult, message: 'Code has been sent!' }))
  .catch(error => this.setState({ message: `Sign In With Phone Number Error: ${error.message}` }));

function* sagaLoginPhone(values) {
  try {
    const resultado = yield call(loginEnFirebasePhone, values.datos);
  } catch (error) {
    console.log(error);
  }
}

export default function* funcionPrimaria() {
  yield takeEvery(CONSTANTS.REGISTRO, sagaRegistro);
  yield takeEvery(CONSTANTS.LOGIN, sagaLogin);
  yield takeEvery(CONSTANTS.LOGIN_PHONE, sagaLoginPhone);
  yield takeEvery(CONSTANTS.FIREBASE_SET, sagaSaveData)
  // yield ES6
  console.log('Desde nuestra función generadora');
}
