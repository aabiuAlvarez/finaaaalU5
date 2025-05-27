import types from './types.js';

const MiReducer = (state={},action) => {
  switch(action.types){
    case types.login:
        return{
          logueado:true,
          usuario:action.usuario
        }
    case types.logout:
        return{
          logueado:false,
          usuario:null
        } 
    default:
        return state;
  }
}

export default MiReducer;