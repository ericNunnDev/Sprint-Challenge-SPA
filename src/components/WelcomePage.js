import React from 'react';
import img from '../images/rick-morty-bg.jpg';

export const WelcomePage = () => {
  return (
    <section className='welcome-page'>
      <header>
        <h2>Welcome to the ultimate fan site!</h2>
        <img className='responsive-img' src={img} alt='Rick and Morty World' />
      </header>
    </section>
  );
}

export default WelcomePage;