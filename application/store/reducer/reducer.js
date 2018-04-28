import ActionTypes from '../constant/constant';

const INITIAL_STATE = {
    // userName: '',
    // todos: []
    email:'',
    password:''
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        
        case ActionTypes.SIGNUPUSER:
            return ({
                ...state,
                email: action.payload.email,
                password: action.payload.password
            })

        default:
            return state;
    }

}