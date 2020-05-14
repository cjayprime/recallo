/* eslint-disable no-cond-assign */
import * as Actions from "../actions";
import signup from './signup';
import signin from './signin';
import load from './load';

const initialState = {
    loading: [],
    status: false,
    message: '',
    user: {
        firstname: '',
        lastname: '',
        email: '',
        mobile: ''
    },
    business: {
        name: '',
        email: '',
        address: '',
        website: '',
        rc: '',
        did: '',
        agents: '',
        card: '',
        artiste: '',
        recordings: {
            intro: '',
            thankyou: '',
            hold: '',
            hangup: '',
            adverts: '',
            aohcs: ''
        }
    }
}

const account = (state = initialState, action) => {
    // console.log('All states and actions: ', state, action)
    const { loading, type, name } = action;
    var newState = null;
    
    if (type === Actions.LOADING && loading && name === "account") {
        state.loading.push(loading);
        return {
            ...state,
        };
    } else if (newState = signin(state, action)) {
        return newState;
    } else if (newState = signup(state, action)) {
        return newState;
    } else if (newState = load(state, action)) {
        return newState;
    }

    return state;
}

export default account;