import styles from './afantasia.module.css'

import AloeSpin from '../../assets/afantasia assets/Aloe/AloeSpin.gif'
import AloeStand from '../../assets/afantasia assets/Aloe/AloeStand.gif'
import AloeTopologyFront from '../../assets/afantasia assets/Aloe/AloeTopologyFront.png'
import AloeTopologyBack from '../../assets/afantasia assets/Aloe/AloeTopologyBack.png'


export function Afantasia() {
    return (
        <main>
            <div className={styles.assetsContainer}>
                <div className={styles.assetContainer}>
                    <div className={styles.imgContainer}>
                        <img src={AloeSpin} className={styles.assetImg} />
                        <img src={AloeStand} className={styles.assetImg} />
                        <img src={AloeTopologyFront} className={styles.assetImg} />
                        <img src={AloeTopologyBack} className={styles.assetImg} />
                    </div>
                    <p className={styles.assetText}>Low Poly Model of Aloe Character</p>
                </div>
            </div>
        </main>
    )
}