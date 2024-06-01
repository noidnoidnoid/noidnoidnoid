import styles from './modalShowImage.module.css';
import { motion } from 'framer-motion';

export function ModalShowImage({ selectedImage, selectedImageName, onClose }) {
    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <motion.div className={styles.modalContent} initial={{ x: 100 }} animate={{ x: 0 }}>
                <button className={styles.cancelButton} onClick={onClose}>Return</button>
                <img className={styles.modalImage} src={selectedImage} alt="Selected Image" />
                <motion.div 
                className={styles.imageNameContainer} 
                initial={{ opacity: 1 }} 
                animate={{ opacity: 0 }}
                transition={{ delay: 2, duration: 2 }}
                >
                    <p className={styles.imageNameText}>{selectedImageName}</p>
                </motion.div>
            </motion.div>
        </div>
    )
}
