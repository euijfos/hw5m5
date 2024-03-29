const defaultState = {
    user: {
        name: '',
        lastName:'',
        age:''
    }
}


const userReducer = (state= defaultState, action) => {
    switch (action.type){
        case 'ADD_USER':
            return {
                ...state,
                user: {
                    ...action.payload
                }
            }

        default:
            return state
    }
}
export default userReducer