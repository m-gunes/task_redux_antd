

// constant
const POST_ADD = 'POST_ADD';

//Action Creators
export const addPost = (post) => ({ type: POST_ADD, payload: post })


const initState = {
   message: ''
}


export default (state = initState, action) => {
   switch (action.type) {
      case POST_ADD:
         return { ...state, message: action.payload }
      default:
         return state
   }
}