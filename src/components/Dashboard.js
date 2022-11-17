import React from 'react';
import '../styles/componentstyle/Dashboard.css';
import search from '../assets/search.svg';
import bell from '../assets/bell.svg';
import overview from '../assets/overview.svg';
import wallet from '../assets/wallet.png';
import payment from '../assets/payment.png';
import debt from '../assets/debt.png';

const Dashboard = () => {
  return (
    <div>
        <h1 className='company-name'>TransMonitor</h1>
        <form className='search'>
            <button className='search-btn'>
                <img src={search} alt='search icon' className='search-icon'/>
            </button>
            <input 
               type='text' 
               value=''
               className='search-bar'
               placeholder='Search...'
            />
            <a href='#' className='support'>Support</a>
            <a href='#' className='faq'>FAQ</a>
            <img src={bell} alt='bell icon' className='bell-icon'/>
        </form>
        <div className='side-menu'>
          <button className='invoice-btn'>GENERATE INVOICE</button>
          <a href='#' className='main'>Main</a>
          <a href='#'>
            <img src={overview} alt='overview icon' className='overview-icon'/>
            <span className='overview'>Overview</span>
          </a>
          <a href='#' className='payments'>Payments</a>
          <a href='#'>
            <img src={wallet} alt='wallet icon' className='wallet-icon'/>
            <span className='all-payments'>All Payments</span>
          </a>
          <a href='#' className='reconciled'>
            <img src={payment} alt='payment icon' className='payment-icon'/>
            <span className='rec-payments'>Reconcilled Payments</span>
          </a>
          <a href='#' className='unreconciled'>
            <img src={debt} alt='debt icon' className='debt-icon'/>
            <span className='debt'>Un-Reconcilled Payments</span>
          </a>
          

        </div>
            
        
    </div>
  )
}

export default Dashboard