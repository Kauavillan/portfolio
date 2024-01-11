import Link from "next/link";
import Brazil from "../public/images/brazil.svg";
import Us_Uk from "../public/images/us_uk_flag.svg";
import { RiArrowDownSFill } from "react-icons/ri";
import { useRouter } from "next/router";
import styles from "../styles/Languages.module.css";
import Image from "next/image";
export default function Languages({ action, langShow }) {
  const { locale, locales, push } = useRouter();

  return (
    <div className={styles.lang}>
      {locale == locales[0] ? (
        <>
          <div
            key={locales[0]}
            className={styles.currentLang}
            onMouseDown={action}
          >
            {locales[0]} <Image src={Brazil} alt="Bandeira do Brasil" />{" "}
            <RiArrowDownSFill className={`${langShow && styles.active}`} />
          </div>
          <Link href="/" locale={locales[1]}>
            <div
              key={locales[1]}
              className={`${langShow ? styles.show : styles.hide} ${
                styles.secondLang
              }`}
            >
              {locales[1]}{" "}
              <Image src={Us_Uk} alt="Bandeira EUA e Reino Unido" />
            </div>
          </Link>
        </>
      ) : (
        <>
          <div
            key={locales[1]}
            className={styles.currentLang}
            onMouseDown={action}
          >
            {locales[1]} <Image src={Us_Uk} alt="UK and USA flag" />{" "}
            <RiArrowDownSFill className={`${langShow && styles.active}`} />
          </div>
          <Link href="/" locale={locales[0]}>
            <div
              key={locales[0]}
              className={`${langShow ? styles.show : styles.hide} ${
                styles.secondLang
              }`}
            >
              {locales[0]} <Image src={Brazil} alt="Brazil flag" />
            </div>
          </Link>
        </>
      )}
    </div>
  );
}
