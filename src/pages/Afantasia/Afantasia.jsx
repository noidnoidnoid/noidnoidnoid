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

import TunnelRender1 from '../../assets/afantasia assets/Tunnel/TunnelRender1.png';
import TunnelRender2 from '../../assets/afantasia assets/Tunnel/TunnelRender2.png';
import TunnelTopology1 from '../../assets/afantasia assets/Tunnel/TunnelTopology1.png';
import TunnelTopology2 from '../../assets/afantasia assets/Tunnel/TunnelTopology2.png';

import TempoSchoolRender from '../../assets/afantasia assets/TempoSchool/TempoSchoolRender.png';
import TempoSchoolTopology from '../../assets/afantasia assets/TempoSchool/TempoSchoolTopology.png';
import TempoSchoolBrokeTopology from '../../assets/afantasia assets/TempoSchool/TempoSchoolBrokeTopology.png';
import LookoutWall from '../../assets/afantasia assets/TempoSchool/LookoutWall.png';

import BarEntryRender1 from '../../assets/afantasia assets/BAR/BarEntryRender1.png';
import BarEntryRender2 from '../../assets/afantasia assets/BAR/BarEntryRender2.png';
import BarBalconyRender from '../../assets/afantasia assets/BAR/BarBalconyRender.png';
import BarBasementRender from '../../assets/afantasia assets/BAR/BarBasementRender.png';
import BarEntryTopology from '../../assets/afantasia assets/BAR/BarEntryTopology.png';
import BarBalconyTopology from '../../assets/afantasia assets/BAR/BarBalconyTopology.png';
import BarBasementTopology from '../../assets/afantasia assets/BAR/BarBasementTopology.png';
import BarCounterTopology from '../../assets/afantasia assets/BAR/BarCounterTopology.png';

// Definição dos grupos de ativos com seus textos correspondentes
const assetGroups = [
    {
        images: [AloeSpin, AloeStand, AloeTopologyFront, AloeTopologyBack],
        text: "Low Poly Model of Aloe Character"
    },
    {
        images: [InventorySceneInGame, InventorySceneRender, InventorySceneTopology1, InventorySceneTopology2],
        text: "Inventory Scene In Game, Render and Topology"
    },
    {
        images: [TunnelRender1, TunnelRender2, TunnelTopology1, TunnelTopology2],
        text: "Tunnel Scene In Game and Topology"
    },
    {
        images: [TempoSchoolRender, TempoSchoolTopology, TempoSchoolBrokeTopology, LookoutWall],
        text: "Tempo School In Game and Topology"
    },
    {
        images: [BarEntryRender1, BarEntryRender2, BarBalconyRender, BarBasementRender],
        text: "Bar Scene In Game"
    },
    {
        images: [BarEntryTopology, BarBalconyTopology, BarBasementTopology, BarCounterTopology],
        text: "Bar Scene Topology"
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
                <motion.div className={styles.assetContainer} key={`group-${index}`}>
                    <motion.div 
                        className={styles.imgContainer} 
                        drag="x" 
                        whileTap={{ cursor: "grabbing"}}
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
