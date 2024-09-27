import styles from "../app/Styles/section.module.css"

const Section = ({children, title, id}) => (
    <div id={id} className={styles.container}>
      <div className={title ? styles.sectionTitleWrapper : ""}>
          <h2 className={styles.sectionTitle}>{title}</h2>
      </div>
      <div className={styles.contentContainer}>
        {children}
      </div>
    </div>
  );
  
  export default Section;
  