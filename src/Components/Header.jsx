import styles from './header.module.css'
import LogoNoid from '../assets/Logo noidnoidnoid.png'

export function Header() {

    const redirectToProjectSelector = () => {
        window.location.href = '/';
      };

    return (
        <header>
            <div className={styles.container}>
                <img className={styles.logoLeon} src={LogoNoid} alt="Leon Stevans" />
                <h1 className={styles.projectSelectorTitle} onClick={redirectToProjectSelector}>Project Selector</h1>
                <h1 className={styles.contact}>Contact</h1>
            </div>
        </header>
    )
}