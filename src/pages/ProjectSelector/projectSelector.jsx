import styles from './projectSelector.module.css'
import { motion } from 'framer-motion'

import AfantasiaBanner from '../../assets/AfantasiaBanner.png'
import AfantasiaLogo from '../../assets/Logo Afantasia.png'
import EmptyBanner from '../../assets/EmptyBanner.png'

export function ProjectSelector() {

    const redirectToAfantasiaPage = () => {
        window.location.href = '#/afantasia';
    }

    return (
        <main>
            <div className={styles.projectSelectorContainer}>
                <motion.div 
                className={styles.projectContainer} 
                initial={{ x: 100 }}
                animate={{ x: 0}}
                >
                    <img className={styles.projectImg} src={AfantasiaBanner} onClick={redirectToAfantasiaPage}/>
                    <img className={styles.projectLogo} src={AfantasiaLogo} onClick={redirectToAfantasiaPage}/>
                </motion.div>
                <motion.div 
                className={styles.projectContainer} 
                initial={{ x: 100 }}
                animate={{ x: 0}}
                >
                    <img className={styles.projectImg} src={EmptyBanner} alt="" />
                </motion.div>
                <motion.div 
                className={styles.projectContainer} 
                initial={{ x: 100 }}
                animate={{ x: 0}}
                >
                    <img className={styles.projectImg} src={EmptyBanner} alt="" />
                </motion.div>

            </div>
        </main>
    )
}