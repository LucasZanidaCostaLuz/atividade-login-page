"use client"

import styles from "../../styles/page.module.css";

export default function Home() {
  return (
      <div className={styles.main}>
        <h1 className={styles.main_title}> Login </h1>
        <h3> email Adress </h3>
        <input type="text" placeholder="put your email here" required maxLength={100} className={styles.emailText} />
        <h3> Password</h3>
        <input type="password" placeholder="put your password here" className={styles.passwordText}/>
        <button className={styles.button} ><a href="/perfil">Entrar</a></button>
        <a className={styles.link} href="/sign-up">Registrar-se</a>
      </div>
  )
}
