import Link from "next/link";
import styles from "../styles/Button.module.css"
export default function Button({link, text, icon, onclick, lightMode=false, target="_blank", download=false}){
    return(
        <>
        {download ?
             <button onClick={onclick} href={link} className={`${styles.button} ${lightMode && styles.light}`}>{text} {icon}</button>
        :
        link == "#" ?
        <button onClick={onclick} className={`${styles.button} ${lightMode && styles.light}`}>{text} {icon}</button>
        :
            <Link className={styles.button} href={link} target={target}>
                {text} {icon}
            </Link>
        }
            
        </>
    )
}