import CodingImage from "public/images/other_coding_person.jpg"
import Image from "next/image";
import styles from "../styles/About.module.css"
import ComputerIcon from "public/images/icon_computer.svg";
import CodeIcon from "public/images/icon_code.svg";
import LampIcon from "public/images/icon_lamp.svg";
import CoffeIcon from "public/images/icon_coffe.svg";
import { windowSizeContext } from "./WindowSizeProvider";
import { useContext } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import Link from "next/link";
export default function About(){
    const {windowSize, setWindowSize} = useContext(windowSizeContext);
    const {locale, locales, push} = useRouter();
    const {t: translate} = useTranslation('translation');
    return(
        <>
        <section id="about" className={styles.about}>
            <div className={styles.container} data-aos="fade-right"><div><Image src={CodingImage} alt="Desenho de pessoa programando" priority={true} data-aos="fade-right" /></div></div>
            <p data-aos="fade-left">
                {translate("sou um")} <strong> {translate("desenvolvedor full-stack")}</strong>, {translate("carinho especial")}. {translate("moro em")} <strong>{translate("tecnico de informatica")}</strong> {translate("e formando em")} <strong>{translate("sistemas de informacao")}</strong>,
                  {translate("ambos no")} <span>{locale == "pt" ?  <Link href="http://www.cefet-rj.br/index.php/nova-friburgo" rel="noreferrer" target="_blank">CEFET de Nova Friburgo</Link> : <Link href="http://www.cefet-rj.br/index.php/english-version" rel="noreferrer" target="_blank">CEFET</Link>}</span>.
            </p>
            { windowSize.width >=1250 ?
                <div data-aos="fade-left" className={`${styles.list} ${styles.bigwind}`}>
                    <ul>
                        <li><Image src={ComputerIcon} alt={translate("icone computador")}/>{translate("interesse em tecnologia")}</li>
                        <li><Image src={CodeIcon} alt={translate("icone programa")}/>{translate("disposto a aprender")}</li>
                        <li><Image src={LampIcon} alt={translate("icone lampada")}/>{translate("encontrar solucoes")}</li>
                        <li><Image src={CoffeIcon} alt={translate("icone cafe")}/>{translate("amo cafe")}</li>
                    </ul>
                </div> : <></>
            }
           
        </section>
        { windowSize.width < 1250 ?
                <section data-aos="fade-left" className={`${styles.list} ${styles.smwind}`}>
                    <ul>
                        <li><Image src={ComputerIcon} alt={translate("icone computador")}/>{translate("interesse em tecnologia")}</li>
                        <li><Image src={CodeIcon} alt={translate("icone programa")}/>{translate("disposto a aprender")}</li>
                        <li><Image src={LampIcon} alt={translate("icone lampada")}/>{translate("encontrar solucoes")}</li>
                        <li><Image src={CoffeIcon} alt={translate("icone cafe")}/>{translate("amo cafe")}</li>
                    </ul>
                </section> : <></>
            }
        </>
    )
}