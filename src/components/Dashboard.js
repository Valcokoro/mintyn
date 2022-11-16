import React from 'react';
import '../styles/componentstyle/Dashboard.css';
import search from '../assets/search.svg';

const Dashboard = () => {
  return (
    <div>
        <h1 className='company-name'>TransMonitor</h1>
        <form className='search'>
            <button className='search-btn'>
                <img src={search} alt='search icon' className='search-icon'/>
            </button>

        </form>
    </div>
  )
}

export default Dashboard