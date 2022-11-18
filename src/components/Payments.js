import React, {useState, useEffect} from 'react';
import '../styles/componentstyle/Payments.css';
import { fetchPayments } from '../actions';
import {useSelector, useDispatch} from 'react-redux';

const Payments = () => {
    const { payments } = useSelector(state => state);


    const dispatch = useDispatch();

    const fetchPaymentsData = () => {
        dispatch(fetchPayments());
    }

    useEffect(() => {
        fetchPaymentsData();
    }, []);

    const itemType = payments[0]?.products.map(payment => {
        return (
            <div>
                {payment.item}
            </div>
            
        )
    })
   
  return (
    <section>
                <table className='payment-table'>
                    <tbody>
                        <tr>
                            <th>
                                <p className='item-type'>Item Type</p>
                            </th>
                        </tr>
                    </tbody>

                </table>
            </section>
  )
}

export default Payments