"use client"

import { useState } from "react";
import styles from "../../styles/sign-up.module.css";

export default function Registrar() {

    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState(""); 
    const [match, setMatch] = useState(null); 
    const [error, setError] = useState(null); 

    const handleCheck = () => {
        
        if (input1.length === 0) {
            setMatch(false); 
            setError("Preencha o input 1"); 
          } else if (input2.length === 0) {
            setMatch(false); 
            setError("Preencha o input 2");
          }else if (input1 !== input2) {
          setMatch(false);
          setError("As senhas não conferem");
        } else if (input1.length < 6) {
          setMatch(false); 
          setError("A senha deve ter no mínimo 6 caracteres"); 
        } else {
          setMatch(true); 
          setError("Sucesso"); 
        }
      };

  return (
      <div className={styles.main}>
        <h1 className={styles.main_title}> Registro </h1>
        <h3> email Adress </h3>
        <input type="text" placeholder="put your email here" required maxLength={100} className={styles.emailText} />
        <h3> Password</h3>
        <input type="password"  
        placeholder="put your password here"
        value={input1}
        onChange={(e) => setInput1(e.target.value)}
        className={styles.passwordText}/>
        
        <h3>Repeat Password</h3>
        <input type="password"  
        placeholder="put your password here"
        value={input2}
        onChange={(e) => setInput2(e.target.value)} 
        className={styles.passwordText}/>
        <button onClick={handleCheck}>Verificar</button>{" "}
        {match !== null && <p>{error}</p>}{" "}
        <a className={styles.link} href="/home">Sign-in</a>
      </div>
  )
}