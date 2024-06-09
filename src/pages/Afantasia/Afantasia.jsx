// Importing Packages and Components
import styles from './afantasia.module.css';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import { ModalShowImage } from '../../Components/ModalShowImage/ModalShowImage.jsx';

// Importing the images

import RefreshIcon from '../../assets/RefreshIcon.svg';

import AloeSpin from '../../assets/afantasia assets/Aloe/Aloe_Spin.gif';
import AloeStand from '../../assets/afantasia assets/Aloe/Aloe_Stand.gif';
import AloeTopologyFront from '../../assets/afantasia assets/Aloe/Aloe_Topology_Front.png';
import AloeTopologyBack from '../../assets/afantasia assets/Aloe/Aloe_Topology_Back.png';
import AloeRig from '../../assets/afantasia assets/Aloe/Aloe_Rig.gif';

import PierRender1 from '../../assets/afantasia assets/Pier/Pier_Render_1.png';
import PierRender2 from '../../assets/afantasia assets/Pier/Pier_Render_2.png';
import PierRender3 from '../../assets/afantasia assets/Pier/Pier_Render_3.png';
import PierTopology1 from '../../assets/afantasia assets/Pier/Pier_Topology_1.png';
import PierTopology2 from '../../assets/afantasia assets/Pier/Pier_Topology_2.png';

import WalkwayRender1 from '../../assets/afantasia assets/Walkway/Walkway_Render_1.png';
import WalkwayRender2 from '../../assets/afantasia assets/Walkway/Walkway_Render_2.png';
import WalkwayTopology1 from '../../assets/afantasia assets/Walkway/Walkway_Topology.png';

import GhostAlleyRender1 from '../../assets/afantasia assets/GhostAlley/Ghost_Alley_Render_1.gif';
import GhostAlleyRender2 from '../../assets/afantasia assets/GhostAlley/Ghost_Alley_Render_2.png';
import GhostAlleyRender3 from '../../assets/afantasia assets/GhostAlley/Ghost_Alley_Render_3.png'; 
import GhostAlleyTopology1 from '../../assets/afantasia assets/GhostAlley/Ghost_Alley_Topology_1.png';
import GhostAlleyTopology2 from '../../assets/afantasia assets/GhostAlley/Ghost_Alley_Topology_2.png';

import SwingRender from '../../assets/afantasia assets/Swing/Swing_Render.gif';
import SwingTopology from '../../assets/afantasia assets/Swing/Swing_Topology.png';

import TunnelRender1 from '../../assets/afantasia assets/Tunnel/Tunnel_Render_1.png';
import TunnelRender2 from '../../assets/afantasia assets/Tunnel/Tunnel_Render_2.png';
import TunnelTopology1 from '../../assets/afantasia assets/Tunnel/Tunnel_Topology_1.png';
import TunnelTopology2 from '../../assets/afantasia assets/Tunnel/Tunnel_Topology_2.png';

import TempoSchoolRender from '../../assets/afantasia assets/TempoSchool/Tempo_School_Render.png';
import TempoSchoolTopology from '../../assets/afantasia assets/TempoSchool/Tempo_School_Topology.png';
import TempoSchoolBrokeTopology from '../../assets/afantasia assets/TempoSchool/Tempo_School_Broke_Topology.png';
import LookoutWall from '../../assets/afantasia assets/TempoSchool/Lookout_Wall.png';

import BarEntryRender1 from '../../assets/afantasia assets/BAR/Bar_Entry_Render_1.png';
import BarEntryRender2 from '../../assets/afantasia assets/BAR/Bar_Entry_Render_2.png';
import BarBalconyRender from '../../assets/afantasia assets/BAR/Bar_Balcony_Render.png';
import BarBasementRender from '../../assets/afantasia assets/BAR/Bar_Basement_Render.png';
import BarEntryTopology from '../../assets/afantasia assets/BAR/Bar_Entry_Topology.png';
import BarBalconyTopology from '../../assets/afantasia assets/BAR/Bar_Balcony_Topology.png';
import BarBasementTopology from '../../assets/afantasia assets/BAR/Bar_Basement_Topology.png';
import BarCounterTopology from '../../assets/afantasia assets/BAR/Bar_Counter_Topology.png';

import BusStopRender1 from '../../assets/afantasia assets/BusStop/Bus_Stop_Render_1.gif';
import BusStopRender2 from '../../assets/afantasia assets/BusStop/Bus_Stop_Render_2.gif';
import BusStopTopology from '../../assets/afantasia assets/BusStop/Bus_Stop_Topology.png';
import BusBenchTopology from '../../assets/afantasia assets/BusStop/Bus_Bench_Topology.png';

import SquareInGame from '../../assets/afantasia assets/Square/Square_In_Game.png';
import SquareTopologyRender from '../../assets/afantasia assets/Square/Square_Render.png';
import SquareTopology from '../../assets/afantasia assets/Square/Square_Topology.png';

import PathStairsRender1 from '../../assets/afantasia assets/PathStairs/Path_Stairs_Render_1.png';
import PathStairsRender2 from '../../assets/afantasia assets/PathStairs/Path_Stairs_Render_2.png';
import PathStairsTopology from '../../assets/afantasia assets/PathStairs/Path_Stairs_Topology.png';

import InventorySceneInGame from '../../assets/afantasia assets/InventoryScene/Inventory_Scene_Render_In_Game.gif';
import InventorySceneRender from '../../assets/afantasia assets/InventoryScene/Inventory_Scene_Render.png';
import InventorySceneTopology1 from '../../assets/afantasia assets/InventoryScene/Inventory_Scene_Topology_1.png';
import InventorySceneTopology2 from '../../assets/afantasia assets/InventoryScene/Inventory_Scene_Topology_2.png';

import MessageRoomRender from '../../assets/afantasia assets/MessageRoom/Message_Room_Render.gif';
import MessageRoomTopology from '../../assets/afantasia assets/MessageRoom/Message_Room_Topology.png';

import BusInGame from '../../assets/afantasia assets/Bus/Bus_In_Game.gif';
import BusInteriorInGame from '../../assets/afantasia assets/Bus/Bus_Interior_In_Game.png';
import BusTopology from '../../assets/afantasia assets/Bus/Bus_Topology.gif';
import BusInteriorTopology from '../../assets/afantasia assets/Bus/Bus_Interior_Topology.png';


// Definition of the assets groups and their respective texts
const assetGroups = [
    {
        images: [AloeSpin, AloeStand, AloeTopologyFront, AloeTopologyBack, AloeRig],
        text: "Low Poly Character: Aloe"
    },
    {
        images: [PierRender1, PierRender2, PierRender3, PierTopology1, PierTopology2],
        text: "Pier Scene"
    },
    {
        images: [WalkwayRender1, WalkwayRender2, WalkwayTopology1],
        text: "Walkway Scene"
    },
    {
        images: [GhostAlleyRender1, GhostAlleyRender2, GhostAlleyRender3, GhostAlleyTopology1, GhostAlleyTopology2],
        text: "Ghost Alley"
    },
    {
        images: [SwingRender, SwingTopology],
        text: "Swing Asset"
    },
    {
        images: [TunnelRender1, TunnelRender2, TunnelTopology1, TunnelTopology2],
        text: "Tunnel Level"
    },
    {
        images: [TempoSchoolRender, TempoSchoolTopology, TempoSchoolBrokeTopology, LookoutWall],
        text: "Tempo School"
    },
    {
        images: [BarEntryRender1, BarEntryRender2, BarBalconyRender, BarBasementRender],
        text: "Bar Level"
    },
    {
        images: [BarEntryTopology, BarBalconyTopology, BarBasementTopology, BarCounterTopology],
        text: "Bar Level Topology"
    },
    {
        images: [BusStopRender1, BusStopRender2, BusStopTopology, BusBenchTopology],
        text: "Bus Stop Scene"
    },
    {
        images: [SquareInGame, SquareTopologyRender, SquareTopology],
        text: "Square Asset"
    },
    {
        images: [PathStairsRender1, PathStairsRender2, PathStairsTopology],
        text: "Path Stairs"
    },
    {
        images: [InventorySceneInGame, InventorySceneRender, InventorySceneTopology1, InventorySceneTopology2],
        text: "Inventory Scene"
    },
    {
        images: [MessageRoomRender, MessageRoomTopology],
        text: "Message Room"
    },
    {
        images: [BusInGame, BusInteriorInGame, BusTopology, BusInteriorTopology],
        text: "Bus Asset"
    },
];

export function Afantasia() {
    const [isAnimating, setIsAnimating] = useState(true);
    const [selectedImage, setSelectedImage] = useState('');
    const [selectedImageName, setSelectedImageName] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDragging, setIsDragging] = useState(false);

    const handleDragStart = () => setIsDragging(true);
    const handleDragEnd = () => setIsDragging(false);

    // Function to toggle the animation state
    const toggleAnimation = () => {
        setIsAnimating(prevState => !prevState);
    };

    // Function to show the image dialog
    function showImageDialog(image) {
        if (!isDragging) {
            document.body.classList.add('no-scroll');// Disable page scroll

            setSelectedImageName(image.split('/').pop().split('-')[0].split('.')[0].replace(/_/g, ' '));
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
                                    <div className={styles.imgIndexContainer}>
                                        <p className={styles.imgIndexText}>{imgIndex + 1}/{group.images.length}</p>
                                    </div>
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
            {isModalOpen && <ModalShowImage 
            selectedImage={selectedImage} 
            selectedImageName={selectedImageName} 
            onClose={() => {
                setIsModalOpen(false);
                document.body.classList.remove('no-scroll');
            }}
/>          }
        </>
    );
}