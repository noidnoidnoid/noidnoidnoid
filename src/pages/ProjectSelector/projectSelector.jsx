import styles from './projectSelector.module.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { motion } from 'framer-motion'
import 'react-lazy-load-image-component/src/effects/blur.css';

import AfantasiaBanner from '../../assets/afantasia project selector assets/AfantasiaBanner.png'
import AfantasiaLogo from '../../assets/afantasia project selector assets/Logo Afantasia.png'
import StarWreckBanner from '../../assets/starwreck project selector assets/StarWreckBanner.png'

import StarWreckLogo from '../../assets/starwreck project selector assets/StarWreckLogo.png'
import EmptyBanner from '../../assets/EmptyBanner.png'

export function ProjectSelector() {

    const redirectToAfantasiaPage = () => {
        window.location.href = '#/afantasia';
    }

    const redirectToStarWreckPage = () => {
        window.location.href = '#/starwreck';
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
                    <img
                    className={styles.projectLogo} 
                    src={AfantasiaLogo} 
                    onClick={redirectToAfantasiaPage}
                    />
                </motion.div>
                <motion.div 
                className={styles.projectContainer} 
                initial={{ x: 100 }}
                animate={{ x: 0}}
                >
                    <LazyLoadImage 
                    className={styles.projectImg} 
                    src={StarWreckBanner} 
                    onClick={redirectToStarWreckPage}
                    effect="blur"
                    />
                    <img
                    className={styles.projectLogoStatic} 
                    src={StarWreckLogo} 
                    onClick={redirectToAfantasiaPage}
                    />
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