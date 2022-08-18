import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    const path = '/order';
    navigate(path);
  }
  return (
    <section className='home'>
      <div className="home__info">
        <span className="home__discount">Sale up to 70% off</span>
        <h2 className="home__title">New Collection For Fall</h2>
        <span className="home__subtitle">Discover all the new arrivals of ready-to-wear collection.</span>
        <button type='button' className='home__btn' onClick={handleNavigate} >Shop Now</button>
      </div>
      <div className="home__img-container">
        <img src="images/hero-img.png" alt="" className="home__img" />
      </div>
    </section>
  );
};

export default Home;