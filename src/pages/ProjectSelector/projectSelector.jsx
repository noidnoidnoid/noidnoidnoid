import styles from './projectSelector.module.css'

export function ProjectSelector() {
    return (
        <div className={styles.projectSelectorContainer}>
            <div className={styles.projectContainer}>
                <a href="/afantasia">Afantasia</a>
            </div>
            <div className={styles.projectContainer}>
                <a href="/afantasia">Afantasia</a>
            </div>
            <div className={styles.projectContainer}>
                <a href="/afantasia">Afantasia</a>
            </div>
        </div>
    )
}