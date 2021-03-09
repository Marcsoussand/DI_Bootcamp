import {combineReducers} from 'redux';
import {PROP_TWO} from './actions';

let initStateOne = {
    property_one: 'bla bla bla',
}

export const reducer_one = (state = initStateOne, action = {}) => {
    switch (action.type) {
        case PROP_TWO:
            return { ...state, property_one: action.payload }
            break;
        default:
            return { ...state }
    }

}

let initStateTwo = {
    property_two: '',
}

export const reducer_two = (state = initStateTwo, action = {}) => {
    switch (action.type) {
        case 'PROP_TWO_FROM_CHILD':
            return { ...state, property_two: action.payload }
            break;
        default:
            return { ...state }
    }

}

let initWeather = {
    desc:''
}

export const weatherDesc = (state=initWeather,action={}) => {
switch (action.type) {
    case 'WEATHER':
        return{...state,desc:action.payload}
        break;

    default:
        return {...state}
        break;
}
}


export const reducer = combineReducers(
    {
        reducer_one,
        reducer_two,
        weatherDesc
    }
)