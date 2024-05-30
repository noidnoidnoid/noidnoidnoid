import styles from './modalShowImage.module.css';

export function ModalShowImage({ selectedImage, onClose }) {
    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent}>
                <button className={styles.cancelButton} onClick={onClose}>X</button>
                <img className={styles.modalImage} src={selectedImage} alt="Selected Image" />
            </div>
        </div>
    )
}
