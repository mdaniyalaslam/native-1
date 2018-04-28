import ActionTypes from '../constant/constant';

const INITIAL_STATE = {
    // userName: '',
    // todos: []
    // email:'',
    // password:''
    errorMsg:''
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        
        case ActionTypes.SIGNUPERR:
            return ({
                ...state,
                errorMsg: action.payload,
            })

        default:
            return state;
    }

}