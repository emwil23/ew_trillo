import React from 'react';
import HotelContent from './Pages/HotelContent';
import Sidebar from './Sidebar';

const Content = () => {
  return (
    <div className='content'>
      <Sidebar />
      <HotelContent />
    </div>
  );
};

export default Content;
