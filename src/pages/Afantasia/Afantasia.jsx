import styles from './afantasia.module.css';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import { ModalShowImage } from '../../Components/ModalShowImage/ModalShowImage.jsx';

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

import BusStopRender1 from '../../assets/afantasia assets/BusStop/BusStopRender1.gif';
import BusStopRender2 from '../../assets/afantasia assets/BusStop/BusStopRender2.gif';
import BusStopTopology from '../../assets/afantasia assets/BusStop/BusStopTopology.png';
import BusBenchTopology from '../../assets/afantasia assets/BusStop/BusBenchTopology.png';

import SquareInGame from '../../assets/afantasia assets/Square/SquareInGame.png';
import SquareTopologyRender from '../../assets/afantasia assets/Square/SquareRender.png';
import SquareTopology from '../../assets/afantasia assets/Square/SquareTopology.png';

import PathStairsRender1 from '../../assets/afantasia assets/PathStairs/PathStairsRender1.png';
import PathStairsRender2 from '../../assets/afantasia assets/PathStairs/PathStairsRender2.png';
import PathStairsTopology from '../../assets/afantasia assets/PathStairs/PathStairsTopology.png';

import MessageRoomRender from '../../assets/afantasia assets/MessageRoom/MessageRoomRender.gif';
import MessageRoomTopology from '../../assets/afantasia assets/MessageRoom/MessageRoomTopology.png';

import BusInGame from '../../assets/afantasia assets/Bus/BusInGame.gif';
import BusInteriorInGame from '../../assets/afantasia assets/Bus/BusInteriorInGame.png';
import BusTopology from '../../assets/afantasia assets/Bus/BusTopology.gif';
import BusInteriorTopology from '../../assets/afantasia assets/Bus/BusInteriorTopology.png';

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
        text: "Tunnel Level In Game and Topology"
    },
    {
        images: [TempoSchoolRender, TempoSchoolTopology, TempoSchoolBrokeTopology, LookoutWall],
        text: "Tempo School In Game and Topology"
    },
    {
        images: [BarEntryRender1, BarEntryRender2, BarBalconyRender, BarBasementRender],
        text: "Bar Level In Game"
    },
    {
        images: [BarEntryTopology, BarBalconyTopology, BarBasementTopology, BarCounterTopology],
        text: "Bar Level Topology"
    },
    {
        images: [BusStopRender1, BusStopRender2, BusStopTopology, BusBenchTopology],
        text: "Bus Stop Scene In Game and Topology"
    },
    {
        images: [SquareInGame, SquareTopologyRender, SquareTopology],
        text: "Square In Game, Render and Topology"
    },
    {
        images: [PathStairsRender1, PathStairsRender2, PathStairsTopology],
        text: "Path Stairs In Game and Topology"
    },
    {
        images: [MessageRoomRender, MessageRoomTopology],
        text: "Message Room In Game and Topology"
    },
    {
        images: [BusInGame, BusInteriorInGame, BusTopology, BusInteriorTopology],
        text: "Bus In Game, Topology and Shading"
    },

];

export function Afantasia() {
    const [isAnimating, setIsAnimating] = useState(true);
    const [selectedImage, setSelectedImage] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDragging, setIsDragging] = useState(false);

    const handleDragStart = () => setIsDragging(true);
    const handleDragEnd = () => setIsDragging(false);

    // Função para alternar o estado de animação
    const toggleAnimation = () => {
        setIsAnimating(prevState =>!prevState);
    };

    // Função para exibir o modal de imagem
    function showImageDialog(image) {
        if (!isDragging) {
            setSelectedImage(image);
            setIsModalOpen(true);
        }
    }

    return (
        <>
            <div className={styles.assetsContainer}>
                {assetGroups.map((group, index) => (
                    <motion.div className={styles.assetContainer} key={`group-${index}`}>
                        <motion.div 
                            className={styles.imgContainer} 
                            drag="x" 
                            whileTap={{ cursor: "grabbing"}}
                            dragConstraints={{ right: 900, left: -900}} 
                            initial={{ x: 100 }}
                            animate={{ x: isAnimating? 0 : 100 }}
                            onDragStart={handleDragStart}
                            onDragEnd={handleDragEnd}
                        >
                            {group.images.map((image, imgIndex) => (
                                <motion.div 
                                className={styles.item} 
                                key={`${image}-${imgIndex}`} 
                                onClick={() => showImageDialog(image)}

                                >
                                    <LazyLoadImage 
                                    className={styles.assetImg}
                                    src={image} 
                                    alt={image.alt} 
                                    effect="blur"
                                    />
                                </motion.div>
                            ))}
                        </motion.div>
                        <div className={styles.textContainer}>
                            <p className={styles.assetText}>{group.text}</p>
                            <button className={styles.refreshButton} onClick={toggleAnimation}>
                                <img src={RefreshIcon}/>
                            </button>
                        </div>
                        <hr />
                    </motion.div>
                ))}
            </div>
            {isModalOpen && <ModalShowImage selectedImage={selectedImage} onClose={() => setIsModalOpen(false)}/>}
        </>
    );
}