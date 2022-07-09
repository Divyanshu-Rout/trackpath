import createDataContext from './createDataContext'

const authReducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

const signup = (dispatch) => {
    return ({ email, password }) => {
        //Api request signup

        //modify state authenticated

        //if signup fails 
    }
}

const signout = (dispatch) => {
    return () => {
        //Api request signout

        //modify state authenticated

        //if signout fails 
    }
}

const signin = (dispatch) => {
    return ({ email, password }) => {
        //Api request signin

        //modify state authenticated

        //if signinfails 
    }
}



export const { Provider, Context } = createDataContext(
    authReducer,
    { signin, signout, signup },
    { isSignedIn: false },
)