import {combineReducers} from 'redux';
import { FETCH_PAYMENTS } from '../actions/types';


const paymentsReducer = (payments=[], action) => {
    if(action.type === FETCH_PAYMENTS){
        return [...payments, action.payload]
    }
    return payments;
}



export default combineReducers({
    payments: paymentsReducer
});