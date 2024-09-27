import React from 'react';
import styles from "../app/Styles/popup.module.css";
import Image from "next/image";
import { FaTimes } from "react-icons/fa";

const Popup = ({ data, closeFunction, secondaryTitle, highlightTitle }) => {

  if (!data) return null;

  const hasImages = data.images && data.images.some(imgSrc => imgSrc !== null);

  return (
    <div className={styles.popupOverlay} onClick={closeFunction}>
      <div className={styles.popupContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={closeFunction}>
          <FaTimes />
        </button>
        <h2 className={styles.popupTitle}>{secondaryTitle ? data.title + " \u007C " + secondaryTitle : data.title}</h2>
        <p className={styles.popupDescription}>{data.description}</p>
        <div className={styles.popupDivider}></div>
        <div className={styles.techContainer}>
          {data.technologies && <h3>{data.technologies.length != 1 ? "Technologies Used:" : "Technology Used:"} {data.technologies.join(', ')}</h3>}
        </div>
        {hasImages && (
          <div className={styles.imageWrapperContainer}>
            {data.images.map((imgSrc, index) => (
              imgSrc && (
                <div key={index} className={styles.imageWrapper}>
                  <Image
                    src={imgSrc}
                    alt={`Image ${index + 1}`}
                    fill
                    loading='lazy'
                    className={styles.popupImage}
                  />
                </div>
              )
            ))}
          </div>
        )}
        {data.highlights && (
          <>
            <h3 className={styles.dropdownHeader}>
              {highlightTitle ?? "Project Highlights"} 
            </h3>
              <ul className={styles.highlightList}>
                {data.highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
          </>
        )}
        {data.gpa && <p className={styles.popupGpa}>{data.gpa}</p>}
      </div>
    </div>
  );
};

export default Popup;
