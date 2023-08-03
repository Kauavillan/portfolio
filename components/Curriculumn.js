import Image from "next/image";
import CurImage from "../public/images/curriculo_atual.png";
import CurImageEn from "../public/images/curriculo_atual_ingles.png";
import styles from "../styles/Curriculumn.module.css";
import Button from "@/Items/Button";
import {BsDownload} from "react-icons/bs"
import {saveAs} from "file-saver";
import { useTranslation } from "next-i18next";
export default function Curriculumn({handleView, locale}){
    const {t: translate} = useTranslation('translation');
    const handleClick = ()=>{
        let url = locale == "pt" ? "/images/curriculo_atual.png" : "/images/curriculo_atual_ingles.png";
        let text = locale == "pt" ? "Currículo Kauã Villa Nova" : "CV Kaua Villa Nova";
        saveAs(url, text);
       }
    return(
        <div className={styles.cur}>
            <div className={styles.background} onClick={handleView}></div>
            <div><Image src={locale == "pt" ? CurImage : CurImageEn} alt="Currículo"/></div>
            <Button text={translate("baixar curriculo")} lightMode={true} icon={<BsDownload/>} onclick={handleClick} link={locale == "pt" ? CurImage : CurImageEn} download="true"/>
        </div>
    )
}