import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import styles from './Footer.module.css'

function Footer() {
    return (
        <footer>
            <p>Nosso rodapé</p>
            <ul className={styles.socialList}>
                <li><FaFacebook/></li>
                <li><FaInstagram/></li>
                <li><FaLinkedin/></li>
            </ul>
        </footer>

    )
}

export default Footer