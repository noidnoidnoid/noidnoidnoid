import styles from './projectSelector.module.css'

import AfantasiaBanner from '../../assets/AfantasiaBanner.png'
import AfantasiaLogo from '../../assets/Logo Afantasia.png'
import EmptyBanner from '../../assets/EmptyBanner.png'
import TBALogo from '../../assets/Logo TBA.png'

export function ProjectSelector() {
    return (
        <div className={styles.projectSelectorContainer}>
            <div className={styles.projectContainer}>
                <img className={styles.projectImg} src={AfantasiaBanner}/>
                <img className={styles.projectLogo} src={AfantasiaLogo} />
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