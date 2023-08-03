import styles from "../styles/Footer.module.css"
import { useTranslation } from "next-i18next";;
export default function Footer(){
    const {t: translate} = useTranslation('translation');
    return(
        <footer className={styles.footer}>
            <p>{translate("desenvolvido por")} Kauã Villa Nova &copy; 2023</p>
        </footer>
    )
}