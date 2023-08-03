import Image from "next/image";
import Logo from "public/images/logo.png";
import MenuIcon from "public/images/menu-icon.png";
import NavbarIcons from "@/Items/NavBarIcons";
import styles from "../styles/Navbar.module.css";
import sbstyles from "../styles/InnerSidebar.module.css";
import NavbarLinks from "@/Items/NavbarLinks";
import { FaGithub, FaLinkedin} from "react-icons/fa";
import {GrClose} from "react-icons/gr"
import { windowSizeContext } from "./WindowSizeProvider";
import { useContext, useState } from "react";
import { IoMdMail } from "react-icons/io";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

import Languages from "@/Items/Languages";

export default function navBar(){
    const {windowSize, setWindowSize} = useContext(windowSizeContext);
    const [sidebarActive, setSidebarActive] = useState(false);
    const [langShow, SetLangShow] = useState(false);
    const {locale, locales, push} = useRouter();
    const {t: translate} = useTranslation('translation');
    function handleSidebar(){
        setSidebarActive(!sidebarActive);
    }
    function handleLanguage(){
        SetLangShow(!langShow);
    }
    return(
        <header className={styles.navbar}>
            < Image src={Logo} alt="Logo" className={styles.logo} />
             {  windowSize.width >=700 ?
                <ul>
                    <NavbarLinks link="about" name={translate("sobre mim")} target="_self"/>
                    <NavbarLinks link="skills" name={translate("conhecimentos")} target="_self"/>
                    <NavbarLinks link="projects" name={translate("projetos")} target="_self"/>
                    <NavbarLinks link="contact" name={translate("contato")} target="_self"/>
                    <NavbarIcons link="https://github.com/Kauavillan" icon={<FaGithub />}/>
                    <NavbarIcons link="https://www.linkedin.com/in/kauã-villa-nova-da-silva-7b7422276/" icon={<FaLinkedin />}/>
                    <NavbarIcons link="mailto:kvn.contact.professional@gmail.com" icon={<IoMdMail />}/>
                    <Languages action={handleLanguage} langShow={langShow}/>
                 </ul>
             :
             <Image onClick={handleSidebar} className={styles.menu_icon} src={MenuIcon} alt="Menu icon" width="30" height="30"/>
             }

             {
                windowSize.width < 700 ? 
                    <>
                       {sidebarActive ? <div className={sbstyles.exitmenu} onClick={handleSidebar}></div> : ""}
                        <div className={`${sbstyles.innersb} ${sidebarActive ? sbstyles.show : ''}`}>
                            <GrClose className={sbstyles.close} onClick={handleSidebar}/>
                            <nav>
                                <ul>
                                    <NavbarLinks link="about" name={translate("sobre mim")}/>
                                    <NavbarLinks link="skills" name={translate("conhecimentos")}/>
                                    <NavbarLinks link="projects" name={translate("projetos")}/>
                                    <NavbarLinks link="contact" name={translate("contato")}/>
                                    <div className={sbstyles.icons}>
                                        <NavbarIcons link="https://github.com/Kauavillan" icon={<FaGithub />}/>
                                        <NavbarIcons link="https://www.linkedin.com/in/kauã-villa-nova-da-silva-7b7422276/" icon={<FaLinkedin />}/>
                                        <NavbarIcons link="mailto:kvn.contact.professional@gmail.com" icon={<IoMdMail />}/>
                                    </div>
                                    <Languages action={handleLanguage} langShow={langShow}/>
                                </ul>
                            </nav>
                        </div>
                    </>
                : ""
            }
        </header>
    )
}
