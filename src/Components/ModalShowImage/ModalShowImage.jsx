import styles from './modalShowImage.module.css';
import { motion } from 'framer-motion';

export function ModalShowImage({ selectedImage, onClose }) {
    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <motion.div className={styles.modalContent} initial={{ x: 100 }} animate={{ x: 0 }}>
                <button className={styles.cancelButton} onClick={onClose}>X</button>
                <img className={styles.modalImage} src={selectedImage} alt="Selected Image" />
            </motion.div>
        </div>
    )
}
