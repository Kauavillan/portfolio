import styles from "../styles/Contact.module.css"
import Button from "@/Items/Button";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import {IoMdMail} from "react-icons/io";
import {ImProfile} from "react-icons/im";
import Title from "@/Items/Title";
import { useState } from "react";
import Curriculumn from "./Curriculumn";
import Emote from "../public/images/blink_emote.png"
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import Image from "next/image";
export default function Contact(){
    const [viewCurriculumn, setViewCurriculumn] = useState(false);
    function handleViewCurriculumn(){
        setViewCurriculumn(!viewCurriculumn);
    }
    const {locale, locales, push} = useRouter();
    const {t: translate} = useTranslation('translation');
    return(
        <section id="contact" className={styles.contact}>
            <Title title={translate("contato")}/>
            <p>{translate("interessou pelo trabalho")}</p>
            <div className={styles.buttons}>
                <Button text="github" link="https://github.com/Kauavillan" icon={<BsGithub/>}/>
                <Button text="linkedin" link="https://www.linkedin.com/in/kauã-villa-nova-da-silva-7b7422276/" icon={<BsLinkedin/>}/>
                <Button text="E-mail" link="mailto:kvn.contact.professional@gmail.com" icon={<IoMdMail/>}/>
            </div>
            <p>{translate("pensando em contratar")} <Image src={Emote} alt={translate("emoji piscando")}/></p>
            <div className={styles.buttons}>
            <Button text={translate("ver curriculo")} link="#" onclick={handleViewCurriculumn} icon={<ImProfile/>}/>
            { viewCurriculumn &&
                <Curriculumn handleView={handleViewCurriculumn} locale={locale}/>
            }
            </div>
        </section>
    )
}