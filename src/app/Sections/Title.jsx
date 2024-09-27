"use client";
import Image from "next/image";
import { FaEnvelope, FaPhone, FaLinkedin, FaInstagram, FaStrava, FaFileAlt } from 'react-icons/fa';
import styles from "../Styles/title.module.css";
import { useEffect, useState } from "react";
import Headshot from '/public/Headshot.jpg'

const Title = () => {
  const words = ["Developer", "Learner", "Student", "Runner"];
  const [currentWord, setCurrentWord] = useState(0);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(false);
      setTimeout(() => {
        setAnimate(true);
        setCurrentWord((prevWord) => (prevWord + 1) % words.length);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <div className={styles.textBar}></div>
        <div className={styles.textContent}>
          <div className={styles.title}>
            Hi, I am <span className={styles.highlight}>Grant Wasserman</span>
          </div>
          <div className={styles.subtitle}>
            I am a <span className={`${styles.wordTransition} ${animate ? styles.animate : ''}`}>{words[currentWord]}</span>
          </div>
        </div>
      </div>
      <div className={styles.imgContactContainer}>
        <div className={styles.imgContainer}>
          <Image
            src={Headshot}
            alt="Headshot"
            width={200}
            height={200}
            className={styles.headshot}
          />
        </div>
        <div className={styles.contactContainer}>
        <div className={styles.contactItem}>
          <a href="mailto:grantmwasserman@gmail.com">
            <FaEnvelope className={styles.icon} />
            <span>grantmwasserman@gmail.com</span>
          </a>
        </div>
        <div className={styles.contactItem}>
          <a href="tel:+14025607989">
            <FaPhone className={styles.icon} />
            <span>402-560-7989</span>
          </a>
        </div>
        <div className={styles.contactItem}>
          <a href="https://www.linkedin.com/in/grant-wass/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className={styles.icon} />
            <span>LinkedIn</span>
          </a>
        </div>
        <div className={styles.contactItem}>
          <a href="https://www.instagram.com/gran_t12/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className={styles.icon} />
            <span>Instagram</span>
          </a>
        </div>
        <div className={styles.contactItem}>
          <a href="https://www.strava.com/athletes/39084065" target="_blank" rel="noopener noreferrer">
            <FaStrava className={styles.icon} />
            <span>Strava</span>
          </a>
        </div>
        <div className={styles.contactItem}>
          <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
            <FaFileAlt className={styles.icon} />
            <span>Resume</span>
          </a>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Title;
