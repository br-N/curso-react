import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import styles from './Footer.module.css'

function Footer() {
    return (
        <footer>
            <hr></hr>
            <h5>Nosso rodapé:</h5>
            <ul className={styles.socialList}>
                <li><FaFacebook/></li>
                <li><FaInstagram/></li>
                <li><FaLinkedin/></li>
            </ul>
        </footer>

    )
}

export default Footer