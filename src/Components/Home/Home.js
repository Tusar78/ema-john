import React from 'react';

const Home = () => {
  return (
    <section className='home'>
      <div className="home__info">
        <span className="home__discount">Sale up to 70% off</span>
        <h2 className="home__title">New Collection For Fall</h2>
        <span className="home__subtitle">Discover all the new arrivals of ready-to-wear collection.</span>
        <button type='button' className='home__btn'>Shop Now</button>
      </div>
    </section>
  );
};

export default Home;