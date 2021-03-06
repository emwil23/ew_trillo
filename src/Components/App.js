import React from 'react';
import Header from './Header';
import Content from './Content';
import sprite from '../img/sprite.svg';

const App = () => {
  return (
    <div className='container'>
      <Header />
      <Content />
    </div>
  );
};

export default App;
