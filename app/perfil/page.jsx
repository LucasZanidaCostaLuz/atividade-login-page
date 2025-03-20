"use client"

import styles from "../../styles/perfil.module.css"

export default function Perfil(){
    return(
        <main className={styles.main}>
            <div className={styles.principal}> 
                <img src="https://avatars.githubusercontent.com/u/158210099?v=4" alt="eu" className={styles.eu}/>
                <h1>Lucas Zani da Costa Luz</h1>
                <h3>Senai Valinhos - 2TDS1</h3> 
            </div>
            <div className={styles.sobre_mim}>
                <h1>Sobre mim</h1>
                <p className={styles.texto_sobre_mim}>Sou atualmente um aluno do SESI/SENAI, tenho 17 anos e estou fazendo um curso de Desenvolvimento
                    de Sistemas, no tempo livre costumo jogar e conversar com amigos</p>
                <div className={styles.especificacao}>
                    <div>
                        <h1> Cursos feitos </h1>
                        <ul>
                            <li>Curso Programação em nuvem da google</li>
                            <li>Curso de digitação da MicroCamp</li>
                            <li>Curso de informática da MicroCamp</li>
                            <li>Curso de inglês</li>
                            <li>Curso de Desenvolvimento de sistema do SENAI</li>
                        </ul>
                    </div>
                    <div>
                        <h1> Preferências </h1>
                        <ul>
                            <li>Back-End</li>
                            <li>Front-end</li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    )
}