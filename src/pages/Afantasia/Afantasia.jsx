import styles from './afantasia.module.css';
import { motion } from 'framer-motion';
import { useState } from 'react';

// Importação das imagens

import RefreshIcon from '../../assets/RefreshIcon.svg';

import AloeSpin from '../../assets/afantasia assets/Aloe/AloeSpin.gif';
import AloeStand from '../../assets/afantasia assets/Aloe/AloeStand.gif';
import AloeTopologyFront from '../../assets/afantasia assets/Aloe/AloeTopologyFront.png';
import AloeTopologyBack from '../../assets/afantasia assets/Aloe/AloeTopologyBack.png';

import InventorySceneInGame from '../../assets/afantasia assets/InventoryScene/InventorySceneRenderInGame.gif';
import InventorySceneRender from '../../assets/afantasia assets/InventoryScene/InventorySceneRender.png';
import InventorySceneTopology1 from '../../assets/afantasia assets/InventoryScene/InventoryScene-Topology1.png';
import InventorySceneTopology2 from '../../assets/afantasia assets/InventoryScene/InventoryScene-Topology2.png';

// Definição dos grupos de ativos com seus textos correspondentes
const assetGroups = [
    {
        images: [AloeSpin, AloeStand, AloeTopologyFront, AloeTopologyBack],
        text: "Low Poly Model of Aloe Character"
    },
    {
        images: [InventorySceneInGame, InventorySceneRender, InventorySceneTopology1, InventorySceneTopology2],
        text: "Inventory Scene In Game, Render and Topology"
    }
];

export function Afantasia() {
    // Estado para controlar a animação
    const [isAnimating, setIsAnimating] = useState(true);

    // Função para alternar o estado de animação
    const toggleAnimation = () => {
        setIsAnimating(!isAnimating);
    };

    return (
        <div className={styles.assetsContainer}>
            {assetGroups.map((group, index) => (
                <motion.div className={styles.assetContainer} whileTap={{ cursor: "grabbing"}} key={`group-${index}`}>
                    <motion.div 
                        className={styles.imgContainer} 
                        drag="x" 
                        dragConstraints={{ right: 900, left: -900}} 
                        initial={{ x: 100 }}
                        animate={{ x: isAnimating? 0 : 100 }} // Altera a animação com base no estado
                    >
                        {group.images.map((image, imgIndex) => (
                            <motion.div className={styles.item} key={`${image}-${imgIndex}`}>
                                <img className={styles.assetImg} src={image} alt="Asset Image" />
                            </motion.div>
                        ))}
                    </motion.div>
                    <div className={styles.textContainer}>
                        <p className={styles.assetText}>{group.text}</p>
                        <button className={styles.refreshButton} onClick={toggleAnimation}>
                            <img src={RefreshIcon}/>
                        </button>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
