import React from 'react';
import styles from '../hero/Hero.module.css';
import restaurant from "../Assets/Restaurant.jpg";

function Hero() {
  return (
    <div className={styles.hero}>
      <img src={restaurant} alt="Restaurant" className={styles.heroImage} />
      <div className={styles.textContainer}>
        <h1 className={styles.heroTitle}>Let us find your
Forever Food.</h1>
        <p className={styles.heroSubtitle}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!</p>
        <div className={styles.buttonContainer}>
          <button className={styles.button1}>Search Now</button>
          <button className={styles.button2}>Know more</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
