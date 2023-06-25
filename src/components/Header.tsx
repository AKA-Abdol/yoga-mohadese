import { useState } from "react";
import homeIcon from "../assets/images/icon.png"
import styles from './Header.module.css';

export default function Header() {
    const [menuState, setMenuState] = useState(false);

    function handleMenu() {
        setMenuState(!menuState);
    }
    
    return(
        <div className={styles.header}>
            <div className={styles.box} onClick={handleMenu}>
                <div className={`${styles.navBtn} ${menuState ? styles.active : styles['not-active']}`}>
                    <span className={styles['menu-burguer']}></span>
                    <span className={styles['menu-burguer']}></span>
                    <span className={styles['menu-burguer']}></span>
                </div>
            </div>
            <div className={styles['home-link']}>
            <a href="./index.html"><img src={homeIcon} alt="home" className={styles['img-link']} /></a>
            </div>
            <div className={`${styles.sidenav} ${styles['grid-container']} ${menuState ? styles.activeNav : styles['not-activeNav']}`}>
                <a className={`${styles['nav-links']} ${styles.item1} ${menuState ? styles.activeNavLinks : ``}`} href="./index.html">خانه</a>
                <a className={`${styles['nav-links']} ${styles.item2} ${menuState ? styles.activeNavLinks : ``}`} href="./index.html">ثبت نام / ورود</a>
                <a className={`${styles['nav-links']} ${styles.item3} ${menuState ? styles.activeNavLinks : ``}`} href="./aboutMohadese/about.html">یوگا با محدثه</a>
                <a className={`${styles['nav-links']} ${styles.item4} ${menuState ? styles.activeNavLinks : ``}`} href="./reserve/reserve.html">رزرو کلاس حضوری</a>
                <a className={`${styles['nav-links']} ${styles.item5} ${menuState ? styles.activeNavLinks : ``}`} href="./terms/terms.html">قوانین</a>
                <a className={`${styles['nav-links']} ${styles.item6} ${menuState ? styles.activeNavLinks : ``}`} href="./contanct/contact.html">ارتباط با ما</a>
            </div>
        </div>
    )
}

