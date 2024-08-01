// Importing Packages and Components
import styles from './starWreck.module.css';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import { ModalShowImage } from '../../Components/ModalShowImage/ModalShowImage.jsx';

// Importing the images
import RefreshIcon from '../../assets/RefreshIcon.svg';

import Boat from '../../assets/starwreck assets/Boat.jpeg';
import BoatTextured from '../../assets/starwreck assets/Boat_Textured.jpeg';
import BoatInGame from '../../assets/starwreck assets/Boat_In_Game.png';

import BoatCabin from '../../assets/starwreck assets/Boat_Cabin.jpeg';
import BoatCabinTopology from '../../assets/starwreck assets/Boat_Cabin_Topology.jpeg';
import BoatCabinInGame from '../../assets/starwreck assets/Boat_Cabin_In_Game.png';

import SteeringWheelTopology from '../../assets/starwreck assets/Steering_Wheel_Topology.jpeg';
import SteeringWheelTextured from '../../assets/starwreck assets/Steering_Wheel_Textured.jpeg';
import SteeringWheelInGame from '../../assets/starwreck assets/Steering_Wheel_In_Game.png';

import ChairAndDeskTopology from '../../assets/starwreck assets/Chair_And_Desk_Topology.jpeg';
import ChairAndDeskTopology2 from '../../assets/starwreck assets/Chair_And_Desk_Topology_2.jpeg';
import ChairAndDeskTextured from '../../assets/starwreck assets/Chair_And_Desk_Textured.jpeg';
import ChairAndDeskInGame from '../../assets/starwreck assets/Chair_And_Desk_In_Game.png';

import BoatEngine from '../../assets/starwreck assets/Boat_Engine.jpeg';
import BoatEngineTopology from '../../assets/starwreck assets/Boat_Engine_Topology.jpeg';
import BoatPropeller from '../../assets/starwreck assets/Boat_Propeller.jpeg';
import BoatEngineInGame from '../../assets/starwreck assets/Boat_Engine_In_Game.png';

import ArtefactBox from '../../assets/starwreck assets/Artefact_Box.jpeg';
import ArtefactBoxTextured from '../../assets/starwreck assets/Artefact_Box_Textured.jpeg';
import ArtefactBoxInGame from '../../assets/starwreck assets/Artefact_Box_In_Game.png';

import SanctuaryAltar from '../../assets/starwreck assets/Sanctuary_Altar.jpeg';
import SanctuaryAltarTextured from '../../assets/starwreck assets/Sanctuary_Altar_Textured.jpeg';

import SanctuaryWall from '../../assets/starwreck assets/Sanctuary_Wall.jpeg';
import SanctuaryFloor from '../../assets/starwreck assets/Sanctuary_Floor.jpeg';
import SanctuaryDoorWall from '../../assets/starwreck assets/Sanctuary_Door_Wall.jpeg';
import SanctuaryWallsInGame from '../../assets/starwreck assets/Sanctuary_Walls_In_Game.png';

import SanctuaryPortal from '../../assets/starwreck assets/Sanctuary_Portal.jpeg';
import SanctuaryPortalTextured from '../../assets/starwreck assets/Sanctuary_Portal_Textured.jpeg';
import SanctuaryBrokenPortal from '../../assets/starwreck assets/Sanctuary_Broken_Portal.jpeg';
import SanctuaryPortalInGame from '../../assets/starwreck assets/Sanctuary_Portal_In_Game.png';
import SanctuaryAssetsInGame from '../../assets/starwreck assets/Sanctuary_Assets_In_Game.png';

import Candle from '../../assets/starwreck assets/Candle.jpeg';
import CandleTopology from '../../assets/starwreck assets/Candle_Topology.jpeg';
import CandleInGame from '../../assets/starwreck assets/Candle_In_Game.png';

import CoinSlotTopology from '../../assets/starwreck assets/Coin_Slot_Topology.jpeg';
import CoinSlotTextured from '../../assets/starwreck assets/Coin_Slot_Textured.jpeg';
import CoinSlotsInGame from '../../assets/starwreck assets/Coin_Slots_In_Game.png';

// Definition of the assets groups and their respective texts
const assetGroups = [
    {
        images: [Boat, BoatTextured, BoatInGame],
        text: "Boat",
    },
    {
        images: [BoatCabin, BoatCabinTopology, BoatCabinInGame],
        text: "Boat Cabin",
    },
    {
        images: [SteeringWheelTopology, SteeringWheelTextured, SteeringWheelInGame],
        text: "Steering Wheel",
    },
    {
        images: [ChairAndDeskTopology, ChairAndDeskTopology2, ChairAndDeskTextured, ChairAndDeskInGame],
        text: "Chair and Desk",
    },
    {
        images: [BoatEngine, BoatEngineTopology, BoatPropeller, BoatEngineInGame],
        text: "Boat Engine",
    },
    {
        images: [ArtefactBox, ArtefactBoxTextured, ArtefactBoxInGame],
        text: "Artefact Box",
    },
    {
        images: [SanctuaryAltar, SanctuaryAltarTextured],
        text: "Sanctuary Altar: modeling collaboration with Kluivert Mury",
    },
    {
        images: [SanctuaryWall, SanctuaryFloor, SanctuaryDoorWall, SanctuaryWallsInGame],
        text: "Sanctuary Walls",
    },
    {
        images: [SanctuaryPortal, SanctuaryPortalTextured, SanctuaryBrokenPortal, SanctuaryPortalInGame, SanctuaryAssetsInGame],
        text: "Sanctuary Portal: modeling collaboration with Kluivert Mury",
    },
    {
        images: [Candle, CandleTopology, CandleInGame],
        text: "Candle",
    },
    {
        images: [CoinSlotTopology, CoinSlotTextured, CoinSlotsInGame],
        text: "Coin Slot: modeling collaboration with Rafaela Fonseca",
    },
];

export function StarWreck() {
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
                <div className={styles.projectDistribute}>
                    <iframe className={styles.projectIFrame}
                    src="https://itch.io/embed/2862161?border_width=0&amp;bg_color=171219&amp;fg_color=ffffff&amp;link_color=646cff&amp;border_color=000000" 
                    >
                        <a href="https://noidnoidnoid.itch.io/starwreck">
                            StarWreck by noidnoidnoid, RafaelaFoM, rahgall, Klaive, Detron07
                        </a>
                    </iframe>
                </div>
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
