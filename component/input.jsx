import styles from "../styles/input.module.css"

export default function Input ( {content} ) {
    return(
    <div className={styles.inputGroup}>
        <label htmlFor="username" className={styles.emailText}> {content} </label>
        <input type="text" id="username" name="username" required className={styles.input}/>
    </div>
    )
}
