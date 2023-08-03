import styles from "../styles/Skills.module.css";
import ImageWithDescription from '@/Items/ImageWithDescription';
import { useState } from "react";
import {MdOutlineArrowBackIosNew} from "react-icons/md";
import { useTranslation } from "next-i18next";
export default function Skills(){
    const [viewMore, setViewMore] = useState(false);
    const {t: translate} = useTranslation('translation');
    function handleView(){
        setViewMore(!viewMore)

    }
    return(
        <section>
            <div  id="skills" className={`${styles.skills}`}>

                < ImageWithDescription src="/images/html_logo.png" alt="HTML logo" description = "HTML" />

                < ImageWithDescription src="/images/css_logo.png" alt="CSS logo" description = "CSS" />
                
                < ImageWithDescription src="/images/js_logo.png" alt="JavaScript logo" description = "JavaScript" />

                < ImageWithDescription src="/images/react_logo.png" alt="React.js logo" description = "React.js" />
                
                < ImageWithDescription src="/images/nextjs_logo.png" alt="Next.js logo" description = "Next.js" />

                < ImageWithDescription src="/images/github_logo.png" alt="Github logo" description = "GitHub" />

                < ImageWithDescription src="/images/php-logo.png" alt="PHP logo" description = "PHP" />

                < ImageWithDescription src="/images/mysql-logo.jpg" alt="MySQL logo" description = "MySQL" />
            </div>
            <div className={`${styles.layer2} ${viewMore ? styles.appear : styles.disappear}`}>
                < ImageWithDescription src="/images/cpp_logo.png" alt="C++ logo" description = {`C ${translate("e")} C++`} />

                < ImageWithDescription src="/images/python_logo.png" alt="Python logo" description = "Python" />

                < ImageWithDescription src="/images/jquery.svg" alt="JQuery logo" description = "JQuery" />

                < ImageWithDescription src="/images/bootstrap-logo.png" alt="Bootstrap logo" description = "Bootstrap" />

                < ImageWithDescription src="/images/wordpress_logo.png" alt="WordPress logo" description = "WordPress" />
            </div>
                
            <div className={styles.buttonDiv}>
                 <button onClick={()=>handleView()} className={`${styles.button} ${viewMore ? styles.up : styles.down}`}><MdOutlineArrowBackIosNew/></button>   
            </div>
        </section>
    )
}
