import styles from './Frase.module.css'

function Frase() {
    return(
        <div className={styles.fraseContainer}>
            <p className={styles.fraseContent}>Lorem ipsum bla bla bla</p>
        </div>
    )
}

export default Frase