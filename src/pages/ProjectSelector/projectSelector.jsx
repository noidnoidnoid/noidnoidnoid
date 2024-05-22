import styles from './projectSelector.module.css'

import AfantasiaBanner from '../../assets/AfantasiaBanner.png'
import EmptyBanner from '../../assets/EmptyBanner.png'

export function ProjectSelector() {
    return (
        <div className={styles.projectSelectorContainer}>
            <div className={styles.projectContainer}>
                <img className={styles.projectImg} src={AfantasiaBanner} alt="" />
            </div>
            <div className={styles.projectContainer}>
                <img className={styles.projectImg} src={EmptyBanner} alt="" />
            </div>
            <div className={styles.projectContainer}>
                <img className={styles.projectImg} src={EmptyBanner} alt="" />
            </div>

        </div>
    )
}