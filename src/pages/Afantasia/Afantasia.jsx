import styles from './afantasia.module.css';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// Importação das imagens
import AloeSpin from '../../assets/afantasia assets/Aloe/AloeSpin.gif';
import AloeStand from '../../assets/afantasia assets/Aloe/AloeStand.gif';
import AloeTopologyFront from '../../assets/afantasia assets/Aloe/AloeTopologyFront.png';
import AloeTopologyBack from '../../assets/afantasia assets/Aloe/AloeTopologyBack.png';
const AloeAssets = [AloeSpin, AloeStand, AloeTopologyFront, AloeTopologyBack];

import InventorySceneInGame from '../../assets/afantasia assets/InventoryScene/InventorySceneRenderInGame.gif';
import InventorySceneRender from '../../assets/afantasia assets/InventoryScene/InventorySceneRender.png';
import InventorySceneTopology1 from '../../assets/afantasia assets/InventoryScene/InventoryScene-Topology1.png';
import InventorySceneTopology2 from '../../assets/afantasia assets/InventoryScene/InventoryScene-Topology2.png';
const InventorySceneAssets = [InventorySceneInGame, InventorySceneRender, InventorySceneTopology1, InventorySceneTopology2];

const Assets = [AloeAssets, InventorySceneAssets];
const AssetTexts = ["Low Poly Model of Aloe Character", "Inventory Scene In Game, Render and Topology"]

export function Afantasia() {
    const carousel = useRef();
    const [width, setWidth] = useState(0);

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, []);

    return (
        <div className={styles.assetsContainer}>
            {Assets.map((assetGroup, index) => (
                <motion.div ref={carousel} className={styles.assetContainer} whileTap={{ cursor: "grabbing"}} key={`group-${index}`}>
                    <motion.div 
                        className={styles.imgContainer} 
                        drag="x" 
                        dragConstraints={{ right: width, left: -width}} 
                        initial={{ x: 100 }}
                        animate={{ x: 0 }}
                    >
                        {assetGroup.map((image, imgIndex) => (
                            <motion.div className={styles.item} key={`${image}-${imgIndex}`}>
                                <img className={styles.assetImg} src={image} alt="Asset Image" />
                            </motion.div>
                        ))}
                    </motion.div>
                    <p className={styles.assetText}>{AssetTexts[index]}</p>
                </motion.div>
            ))}
        </div>
    );
}
