import styles from './projectSelector.module.css'

import AfantasiaBanner from '../../assets/AfantasiaBanner.png'
import AfantasiaLogo from '../../assets/Logo Afantasia.png'
import EmptyBanner from '../../assets/EmptyBanner.png'

export function ProjectSelector() {

    const redirectToAfantasiaPage = () => {
        window.location.href = '/3D-Portfolio/afantasia';
    }

    return (
        <main>
            <div className={styles.projectSelectorContainer}>
                <div className={styles.projectContainer}>
                    <img className={styles.projectImg} src={AfantasiaBanner} onClick={redirectToAfantasiaPage}/>
                    <img className={styles.projectLogo} src={AfantasiaLogo} />
                </div>
                <div className={styles.projectContainer}>
                    <img className={styles.projectImg} src={EmptyBanner} alt="" />
                </div>
                <div className={styles.projectContainer}>
                    <img className={styles.projectImg} src={EmptyBanner} alt="" />
                </div>

            </div>
        </main>
    )
}