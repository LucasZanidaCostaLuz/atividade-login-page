"use client"

import Input from "@/component/input";
import styles from "../home/page.module.css";

export default function Home() {
  return (
      <div className={styles.main}>
        <h1 className={styles.main_title}> Login </h1>
        <Input content={"email adress"}></Input>
        <Input content={"password"}></Input>
        <button className={styles.button} ><a href="/perfil">Entrar</a></button>
        <a className={styles.link} href="/sign-up">Registrar-se</a>
      </div>
  )
}
