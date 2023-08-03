import Skills from "./Skills";
import Projects from "./Projects";
import About from "./About";
import Title from "@/Items/Title";
import Contact from "./Contact";
import Hero from "./Hero";
import { useTranslation } from "next-i18next";
function Content(){
    const {t: translate} = useTranslation('translation');

    return(

        <main>
            <Hero/>
            <Title title={translate("sobre mim")}/>
            <About/>
            <Title title={translate("conhecimentos")}/>
            < Skills />
            <Title title={translate("projetos")}/>
            <Projects />
            <Contact />
        </main>
    )
}
export default Content;