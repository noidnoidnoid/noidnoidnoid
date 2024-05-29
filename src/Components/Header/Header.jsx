import styles from './header.module.css'

export function Header() {

    const redirectToProjectSelector = () => {
        window.location.href = '/3D-Portfolio/';
    };

    const redirectToLinkedIn = () => {
        window.location.href = 'https://www.linkedin.com/in/leon-stevans-3978b1268/';
    };

    const scrollToFooter = () => {
        document.getElementById('footer').scrollIntoView({behavior: 'smooth'});
    }

    return (
        <header>
            <div className={styles.container}>
                <h1 className={styles.name} onClick={redirectToLinkedIn}>Leon Stevans</h1>
                <h1 className={styles.projectSelectorTitle} onClick={redirectToProjectSelector}>Project Selector AAA</h1>
                <h1 className={styles.contact} onClick={scrollToFooter}>Contact</h1>
            </div>
        </header>
    )
}
