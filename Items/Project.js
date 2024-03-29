import Image from "next/image";
import styles from "../styles/Project.module.css";
import {BsGithub, BsBoxArrowUpRight} from "react-icons/bs";
import Button from "./Button";

function Project({img, title, num, description, link_github="none", locale, link_page, languages}){
    let isEven = num%2;
    return(
        <section  data-aos={isEven == 0 ? "fade-left" : "fade-right"}  data-aos-anchor-placement={isEven == 0 ? "center-bottom" : "top-bottom"} className={styles.project}>
            <h4>{title}</h4>
            <Image src={img} alt={title} />
            <p>{description}</p>
            <ul className={styles.lang}>
                {
                    languages.map(item =>(
                        <li key={item.type}>{item}</li>
                    ))
                }
            </ul>
            <div className={link_github == "none" ? styles.singleButton : styles.buttons}>
                {link_github !== "none" && <Button text={locale == "pt" ? "Ver projeto" : "See project"} link={link_github} icon={<BsGithub/>}/>}
                <Button text= {locale == "pt" ? "Visitar site" : "Visit website"} link={link_page} icon={<BsBoxArrowUpRight/>}/>
            </div>
        </section>
    )
}
export default Project;