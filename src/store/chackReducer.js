
const defaultState = {
    chuck: 'Were is chuck post???',
    
}

export const chuckReducer = (state = defaultState, action) => {

    switch(action.type){

        case "UPDATE_CHUCK":
            return {...state, chuck: action.payload}
        default: return state
    }
}