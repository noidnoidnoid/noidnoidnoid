import styles from './footer.module.css'

export function Footer() {
    return (
        <footer id='footer'>
            <div className={styles.footerContainer}>
                <div className={styles.info}>
                    <p className={styles.text}>© 2024 Leon Stevans</p>
                    <p className={styles.text}>Built with React + Vite</p>
                </div>
                <div className={styles.personalInfo}>
                    <p>Email: leonstevansx@gmail.com</p>
                    <p>Phone: +55 (21) 98896-3968</p>
                </div>
                <div className={styles.linkSection}>
                    <a href="https://www.linkedin.com/in/leon-stevans-3978b1268/">[LinkedIn]</a>
                    <a href="https://github.com/noidnoidnoid">[Github]</a>
                    <a href="https://gitlab.com/L1fuchsia">[GitLab]</a>
                </div>
            </div>
            <div className={styles.noidBar}></div>
        </footer>
    )
}