import styles from './afantasia.module.css'
import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

import AloeSpin from '../../assets/afantasia assets/Aloe/AloeSpin.gif'
import AloeStand from '../../assets/afantasia assets/Aloe/AloeStand.gif'
import AloeTopologyFront from '../../assets/afantasia assets/Aloe/AloeTopologyFront.png'
import AloeTopologyBack from '../../assets/afantasia assets/Aloe/AloeTopologyBack.png'
const AloeAssets = [AloeSpin, AloeStand, AloeTopologyFront, AloeTopologyBack]

export function Afantasia() {

    const carousel = useRef()
    const [width, setWidth] = useState(0)

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }, [])

    return (
        <div className={styles.assetsContainer}>
            <motion.div ref={carousel} className={styles.assetContainer} whileTap={{ cursor: "grabbing"}}>
                <motion.div 
                className={styles.imgContainer} 
                drag="x" 
                dragConstraints={{ right: 0, left: -width}} 
                initial={{ x: 100 }}
                animate={{ x: 0 }}
                >
                    {AloeAssets.map(image => (
                        <motion.div className={styles.item} key={image}>
                            <img className={styles.assetImg} src={image} alt="Aloe Character" />
                        </motion.div>
                    ))}
                </motion.div>
                <p className={styles.assetText}>Low Poly Model of Aloe Character</p>
            </motion.div>
        </div>
    )
}
