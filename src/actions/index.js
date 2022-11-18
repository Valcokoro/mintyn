import payments from '../apis/payments';
import { FETCH_PAYMENTS } from './types';


export const fetchPayments = () => async dispatch => {
    const response = await payments.get('/products');

    dispatch({type: FETCH_PAYMENTS, payload: response.data});
}