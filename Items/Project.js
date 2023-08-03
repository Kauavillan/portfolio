import Image from "next/image";
import styles from "../styles/Project.module.css"
import {BsGithub, BsBoxArrowUpRight} from "react-icons/bs"
import Link from "next/link";
import Button from "./Button";

function Project({img, title, num, description, link_github="none", link_page, languages}){
    
    return(
        <section  data-aos={num%2==0 ? "fade-left" : "fade-right"}  data-aos-anchor-placement={num%2==0 ? "center-bottom" : "top-bottom"} className={styles.project}>
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
                {link_github !== "none" && <Button text="Ver projeto" link={link_github} icon={<BsGithub/>}/>}
                <Button text="Visitar site" link={link_page} icon={<BsBoxArrowUpRight/>}/>
            </div>
        </section>
    )
}
export default Project;