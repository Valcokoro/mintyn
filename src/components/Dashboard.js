import React from 'react';
import '../styles/componentstyle/Dashboard.css';
import search from '../assets/search.svg';
import bell from '../assets/bell.svg';
import overview from '../assets/overview.svg';

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
          <a className='main'>Main</a>

        </div>
            
        
    </div>
  )
}

export default Dashboard