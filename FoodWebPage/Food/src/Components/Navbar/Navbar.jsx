import  { useState } from 'react';
import styles from '../Navbar/Navbar.module.css';
import logo from '../Assets/logo.png';
function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className={styles.navbar}>
      {/* <a href="#" className={styles.logo}>GeekFoods</a>   */}
      <img src={logo} className={styles.logo} alt="" />
      <nav className={`${styles.navCenter} ${showMenu ? styles.showMenu : ''}`}>
        <ul className={styles.navLinks}>
          <li><a href="#" className='active'>Home</a></li>
          <li><a href="#">Quote</a></li>
         
          <li><a href="#">Restaurant</a></li>
          <li><a href="#">Foods</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      <button className={styles.getStarted}>Get Started</button>
      <div className={styles.menuIcon} onClick={toggleMenu}>
        <div className={`${styles.menuLine} ${showMenu ? styles.open : ''}`}></div>
        <div className={`${styles.menuLine} ${showMenu ? styles.open : ''}`}></div>
        <div className={`${styles.menuLine} ${showMenu ? styles.open : ''}`}></div>
      </div>
    </div>
  );
}

export default Navbar;

