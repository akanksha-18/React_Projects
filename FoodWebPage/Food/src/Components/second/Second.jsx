import React from 'react';
import styles from "../second/Second.module.css";
import imageSrc from "../Assets/food.jpg"; // Replace with the path to your image

function Second() {
  return (
    <div className={styles.container}>
      <img src={imageSrc} alt="Your Image" className={styles.image} />
      <div className={styles.text}>
        <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, debitis.</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est esse numquam odio deleniti, beatae, magni dolores provident quaerat totam eos, aperiam architecto eius quis quibusdam fugiat dicta.</p>
        <button className={styles.button}>Get in Touch</button>
      </div>
    </div>
  );
}

export default Second;
