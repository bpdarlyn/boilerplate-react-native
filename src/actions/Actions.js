import CONSTANTS from '../constants/Constants';

export const actionRegistro = values => ({
  type: CONSTANTS.REGISTRO,
  datos: values,
});

export const actionLogin = datos => ({
  type: CONSTANTS.LOGIN,
  datos,
});

export const actionLoginPhone = datos => ({
  type: CONSTANTS.LOGIN_PHONE,
  datos,
});

export const actionEstablecerSesion = usuario => ({
  type: CONSTANTS.ESTABLERCER_SESION,
  usuario,
});

export const actionCerrarSesion = () => ({
  type: CONSTANTS.CERRAR_SESION,
});
