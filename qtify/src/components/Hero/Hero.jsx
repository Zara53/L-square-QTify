import React from "react";
import HeroImage from "../../assests/Hero.svg";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.text}>
        <h1 className={styles.heading}>
          100 Thousand Songs,ad-free
          <br />
          Over thousands podcast episodes
        </h1>
      </div>
      <img src={HeroImage} alt="Hero" />
    </div>
  );
};

export default Hero;
