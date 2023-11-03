import Project from "../Items/Project";
import News from "public/images/pagina-de-noticias.png";
import Clipboard from "public/images/pagina_clipboard_visivel.png";
import Cartao_Interativo from "public/images/pagina_cartao_interativo.png";
import Ip_Tracker from "public/images/pagina_ip_tracker.png";
import Space_Tourism from "public/images/pagina_space_tourism.png";
import Wegia from "public/images/wegia.png";
import Steps_Form from "public/images/pagina_multi_step_form.png";
import styles from "../styles/Projects.module.css";
import {SiPhp, SiJavascript, SiNextdotjs} from "react-icons/si";
import {FaHtml5, FaReact} from "react-icons/fa";
import {DiCss3} from "react-icons/di";
import {GrMysql} from "react-icons/gr";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
function Projects(){
    const {locale, locales, push} = useRouter();
    const {t: translate} = useTranslation('translation');
    var divNumber=0;
    function countDiv(){
        divNumber+=1;
        return divNumber;
    }
    return(
        <div id="projects" className={styles.projects}>
            < Project img={Wegia} title="WeGIA" num={countDiv()} description ={translate("wegia descricao")} locale={locale} link_page="https://demo.wegia.org/html/home.php" languages={[<SiPhp/>, <FaHtml5/>, <DiCss3/>, <SiJavascript/>, <GrMysql/>]}/> 

            < Project img={Steps_Form} title={translate("form multi step")} num={countDiv()} description={translate("form multi step descricao")} locale={locale} link_github="https://github.com/Kauavillan/multi-step-form" link_page="https://kvn-multi-step-form.vercel.app" languages={[<SiNextdotjs/>, <SiJavascript/>, <DiCss3/>]}/>

            < Project img={Space_Tourism} title={translate("turismo espacial")} num={countDiv()} description={translate("turismo espacial descricao")} locale={locale} link_github="https://github.com/Kauavillan/space-tourism" link_page="https://kauavillan.github.io/space-tourism" languages={[<FaReact/>, <SiJavascript/>, <DiCss3/>]}/>

            < Project img={Ip_Tracker} title={translate("rastreadora")} num={countDiv()} description ={translate("rastreadora descricao")} locale={locale} link_github="https://github.com/Kauavillan/Projetos/tree/main/frontendmentor/localizador-ip" link_page="https://kauavillan.github.io/Projetos/frontendmentor/localizador-ip/" languages={[<FaHtml5/>, <DiCss3/>, <SiJavascript/>]}/>

            < Project img={Cartao_Interativo} title={translate("cartao interativo")} num={countDiv()} description ={translate("cartao interativo descricao")} locale={locale} link_github="https://github.com/Kauavillan/Projetos/tree/main/frontendmentor/cartao-interativo" link_page="https://kauavillan.github.io/Projetos/frontendmentor/cartao-interativo/" languages={[<FaHtml5/>, <DiCss3/>, <SiJavascript/>]}/>

            < Project img={News} title={translate("pagina de noticias")} num={countDiv()} description ={translate("pagina de noticias descricao")} locale={locale} link_github="https://github.com/Kauavillan/Projetos/tree/main/frontendmentor/pagina-de-noticias" link_page="https://kauavillan.github.io/Projetos/frontendmentor/pagina-de-noticias/" languages={[<FaHtml5/>, <DiCss3/>, <SiJavascript/>]}/>  

            < Project img={Clipboard} title={translate("pagina clipboard")} num={countDiv()} description={translate("pagina clipboard descricao")} locale={locale} link_github="https://github.com/Kauavillan/Projetos/tree/main/frontendmentor/pagina-clipboard" link_page="https://kauavillan.github.io/Projetos/frontendmentor/pagina-clipboard/" languages={[<FaHtml5/>, <DiCss3/>]}/>    
        </div>
    )
}
export default Projects;