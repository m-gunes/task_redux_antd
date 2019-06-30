

// constants
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';


//Action Creators
export const login = user => ({type: LOGIN_SUCCESS, payload: user});


const initialState = {
   isAuthenticated: false,
   userInfo: {}
}


export default (state = initialState, action) => {
   switch(action.type) {
      case LOGIN_SUCCESS:
         return {...state, isAuthenticated: true, userInfo: action.payload}
      default:
         return state
   }
}