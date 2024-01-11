import styles from "../styles/Footer.module.css";
import { useTranslation } from "next-i18next";
export default function Footer() {
  const { t: translate } = useTranslation("translation");
  const date = new Date();
  return (
    <footer className={styles.footer}>
      <p>
        {translate("desenvolvido por")} Kauã Villa Nova &copy;{" "}
        {date.getFullYear()}
      </p>
    </footer>
  );
}
