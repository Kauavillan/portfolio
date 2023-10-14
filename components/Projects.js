import Project from "../Items/Project";
import News from "public/images/pagina-de-noticias.png";
import Clipboard from "public/images/pagina_clipboard_visivel.png";
import Cartao_Interativo from "public/images/pagina_cartao_interativo.png";
import Ip_Tracker from "public/images/pagina_ip_tracker.png";
import Space_Tourism from "public/images/pagina_space_tourism.png";
import Wegia from "public/images/wegia.png";
import styles from "../styles/Projects.module.css";
import {SiPhp, SiJavascript} from "react-icons/si";
import {FaHtml5, FaReact} from "react-icons/fa";
import {DiCss3} from "react-icons/di";
import {GrMysql} from "react-icons/gr";
import { useTranslation } from "next-i18next";
function Projects(){
    const {t: translate} = useTranslation('translation');
    return(
        <div id="projects" className={styles.projects}>
            
            < Project img={Wegia} title="WeGIA" num={1} description ={translate("wegia descricao")} link_page="https://demo.wegia.org/html/home.php" languages={[<SiPhp/>, <FaHtml5/>, <DiCss3/>, <SiJavascript/>, <GrMysql/>]}/> 

            < Project img={Space_Tourism} title={translate("turismo espacial")} num={2} description ={translate("turismo espacial descricao")} link_github="https://github.com/Kauavillan/space-tourism" link_page="https://kauavillan.github.io/space-tourism" languages={[<FaReact/>, <SiJavascript/>, <DiCss3/>]}/>

            < Project img={Ip_Tracker} title={translate("rastreadora")} num={3} description ={translate("rastreadora descricao")} link_github="https://github.com/Kauavillan/Projetos/tree/main/frontendmentor/localizador-ip" link_page="https://kauavillan.github.io/Projetos/frontendmentor/localizador-ip/" languages={[<FaHtml5/>, <DiCss3/>, <SiJavascript/>]}/>

            < Project img={Cartao_Interativo} title={translate("cartao interativo")} num={4} description ={translate("cartao interativo descricao")} link_github="https://github.com/Kauavillan/Projetos/tree/main/frontendmentor/cartao-interativo" link_page="https://kauavillan.github.io/Projetos/frontendmentor/cartao-interativo/" languages={[<FaHtml5/>, <DiCss3/>, <SiJavascript/>]}/>

            < Project img={News} title={translate("pagina de noticias")} num={5} description ={translate("pagina de noticias descricao")}link_github="https://github.com/Kauavillan/Projetos/tree/main/frontendmentor/pagina-de-noticias" link_page="https://kauavillan.github.io/Projetos/frontendmentor/pagina-de-noticias/" languages={[<FaHtml5/>, <DiCss3/>, <SiJavascript/>]}/>  

            < Project img={Clipboard} title={translate("pagina clipboard")} num={6} description={translate("pagina clipboard descricao")} link_github="https://github.com/Kauavillan/Projetos/tree/main/frontendmentor/pagina-clipboard" link_page="https://kauavillan.github.io/Projetos/frontendmentor/pagina-clipboard/" languages={[<FaHtml5/>, <DiCss3/>]}/>    
        </div>
    )
}
export default Projects;