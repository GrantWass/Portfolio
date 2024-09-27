'use client';
import styles from "../app/Styles/card.module.css";
import Image from "next/image";
import { useState, useEffect } from "react";

const Card = ({
  children,
  color,
  title,
  shortTitle,
  date,
  gpa,
  description,
  shortDesc,
  type = "large",
  event,
  Icon,
  backgroundImage,
  enlargeIcon,
  textBackground,
}) => {
  const classMap = {
    "x-large": styles.cardSpaceLarge,
    large: styles.cardSpace,
    medium: styles.cardSpaceMedium,
    small: styles.cardSpaceSmall,
  };
  const classname = classMap[type] || styles.cardSpace;

  const grayBackground = textBackground
    ? {
        backgroundColor: 'rgba(30, 30, 30, 0.8)',
        border: '0px solid',
        borderRadius: '5px',
        padding: '2px',
      }
    : {};

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth <= 1100);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const displayTitle = isSmallScreen && shortTitle ? shortTitle : title;
  const displayDescription = isSmallScreen && shortDesc ? shortDesc : description;

  return (
    <div className={classname}>
      <div
        className={styles.card}
        style={{ backgroundColor: color }}
        onClick={event}
      >
        {backgroundImage && (
          <Image
            src={backgroundImage}
            alt={title}
            fill
            style={{ objectFit: "cover" }}
            className={styles.cardImage}
          />
        )}
        {date && <div className={styles.cardDate} style={grayBackground}>{date}</div>}
        <div className={styles.cardDescription} style={grayBackground}>{displayDescription}</div>
        {Icon && <Icon size={enlargeIcon ? 36 : 24} />}
        {gpa && <div className={styles.cardTopRight}>{gpa}</div>}
        <h3 className={styles.cardTitle} style={grayBackground}>{displayTitle}</h3>
        {children}
      </div>
    </div>
  );
};

export default Card;
