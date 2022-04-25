import React from 'react';

import styles from "./Navbar.module.css";

const Navbar = ({logOutHandler}) => {
    return (
        <div className={styles.container}>
            <div className={styles.name}> 
                UBgram
            </div>
            <div style={{fontWeight : "bold"}}>
                به پیام رسان دانشگاه بجنورد خوش آمدید 
            </div>
            <div className={styles.logout} onClick = {logOutHandler}>
                LogOut
            </div>
        </div>
    );
};

export default Navbar;