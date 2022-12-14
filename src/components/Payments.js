import React, {useState, useEffect} from 'react';
import '../styles/componentstyle/Payments.css';
import { fetchPayments } from '../actions';
import {useSelector, useDispatch} from 'react-redux';
import line from '../assets/line.svg';

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
                {payment.title}
            </div>
            
        )
    })

    const price = payments[0]?.products.map(payment => {
        return (
            <div>
                {payment.price}
            </div>
        )
    })

    const transaction = payments[0]?.products.map(payment => {
        return (
            <div>
                {payment.id}
            </div>
        )
    })

    const time = payments[0]?.products.map(payment => {
        return (
            <div>
                {payment.rating}
            </div>
        )
    })
  return (
    <section>
                <table className='payment-table'>
                    <tbody>
                        <tr>
                            <th>
                                <h6 className='item-type'>Item Type</h6>
                            </th>
                            <th>
                                <h6 className='price'>Price</h6>
                            </th>
                            <th>
                                <h6 className='transaction'>Transaction No</h6>
                            </th>
                            <th>
                                <h6 className='time'>Time</h6>
                            </th>
                        </tr>
                        <tr>
                            <td>
                                <p className='item-title'>{itemType}</p>
                            </td>
                            <td>
                                <p className='item-price'>{price}</p>
                            </td>
                            <td>
                                <p className='transaction-no'>{transaction}</p>
                            </td>
                            <td>
                                <p className='item-time'>{time}</p>
                            </td>
                        </tr>
                    </tbody>

                </table>
            </section>
  )
}

export default Payments