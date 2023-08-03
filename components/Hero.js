import TypeIt from "typeit-react";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
export default function Hero(){
    const {locale, locales, push} = useRouter();
    const {t: translate} = useTranslation('translation');
    return(
        <section className={styles.welcome}>
            
                <h1> {locale == 'pt' && <TypeIt className={styles.typing} getBeforeInit={(instance)=>{
                    instance.type("Olá, mundo!",{delay:800}).pause(300).move(-5,{delay: 100}).delete(1).type("M").move(5,{delay:100}).delete(6, {delay: 400}).type("pes",{delay: 100}).move(-2).delete(1).type("P").move(2).type("soa!")
                    return instance
                }}></TypeIt>}
                {locale == 'en' &&
                <TypeIt className={styles.typing} getBeforeInit={(instance)=>{
                    instance.type("Hello, world!",{delay:800}).pause(300).move(-5,{delay: 100}).delete(1).type("W").move(5,{delay:100}).delete(6, {delay: 400}).type("per",{delay: 100}).move(-2).delete(1).type("P").move(2).type("son!")
                    return instance
                }}></TypeIt>}<div className={styles.presentation}>{translate("eu sou o")} <span className={styles.name}>Kauã Villa Nova</span></div></h1>
                <h2>{translate("este lugar")}</h2>
        </section>
    )
}