
import styles from "./Styles/header.module.css";
import { FaHome, FaFileCode, FaTools, FaBook } from 'react-icons/fa';
import { IoAccessibility } from "react-icons/io5"
import { MdOutlineWork } from "react-icons/md";
import { FaPuzzlePiece } from "react-icons/fa6";


const Header = () => (
  <div className={styles.navbar}>
    <a href="#home" className={styles.navItem}><FaHome/></a>
    <a href="#work" className={styles.navItem}><MdOutlineWork/></a>
    <a href="#education" className={styles.navItem}><FaBook/></a>
    <a href="#projects" className={styles.navItem}><FaFileCode/></a>
    <a href="#languages" className={styles.navItem}><FaTools/></a>
    <a href="#skills" className={styles.navItem}><FaPuzzlePiece/></a>
    {/* <a href="#about" className={styles.navItem}><IoAccessibility/></a> */}

  </div>
);

export default Header;
