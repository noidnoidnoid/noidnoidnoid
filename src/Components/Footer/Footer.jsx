import styles from './footer.module.css'

import NoidLogo from '../../assets/Logo noidnoidnoid.png'

export function Footer() {
    return (
        <footer id='footer'>
            <div className={styles.footerContainer}>
                <div className={styles.infoSection}>
                    <img className={styles.logo} src={NoidLogo} alt="Logo noidnoidnoid"/>
                    <div className={styles.info}>
                        <p className={styles.text}>© 2024 Leon Stevans</p>
                        <p className={styles.text}>Built with React + Vite</p>
                    </div>
                    <hr className={styles.verticalLine}/>
                    <div className={styles.personalInfo}>
                        <p>Email: leonstevansx@gmail.com</p>
                        <p>Phone: +55 (21) 98896-3968</p>
                    </div>
                </div>
                <div className={styles.linkSection}>
                    <div className={styles.linkRow}>
                        <a href="https://www.linkedin.com/in/leon-stevans-3978b1268/">[LinkedIn]</a>
                    </div>
                    <div className={styles.linkRow}>
                        <a href="https://github.com/noidnoidnoid">[Github]</a>
                    </div>
                    <div className={styles.linkRow}>
                        <a href="https://gitlab.com/L1fuchsia">[GitLab]</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}