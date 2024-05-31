import styles from './projectSelector.module.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
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
                    <LazyLoadImage 
                    className={styles.projectImg} 
                    src={AfantasiaBanner} 
                    onClick={redirectToAfantasiaPage}
                    effect="blur"
                    />
                    <LazyLoadImage 
                    className={styles.projectLogo} 
                    src={AfantasiaLogo} 
                    onClick={redirectToAfantasiaPage}
                    effect="blur"
                    />
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