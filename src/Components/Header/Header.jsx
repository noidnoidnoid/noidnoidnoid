import styles from './header.module.css'

export function Header() {

    const redirectToProjectSelector = () => {
        window.location.href = '/';
      };

    return (
        <header>
            <div className={styles.container}>
                <h1 className={styles.name}>Leon Stevans</h1>
                <h1 className={styles.projectSelectorTitle} onClick={redirectToProjectSelector}>Project Selector</h1>
                <h1 className={styles.contact}>Contact</h1>
            </div>
        </header>
    )
}