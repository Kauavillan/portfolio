import Image from "next/image";
import CurImage from "../public/images/curriculo_atual.png";
import CurImageEn from "../public/images/curriculo_atual_ingles.png";
import Loading from "../public/images/loading_white.svg";
import styles from "../styles/Curriculumn.module.css";
import Button from "@/Items/Button";
import { BsDownload } from "react-icons/bs";
import { saveAs } from "file-saver";
import { useTranslation } from "next-i18next";
import { useState } from "react";
export default function Curriculumn({ handleView, locale }) {
  const [loaded, setLoaded] = useState(false);
  const { t: translate } = useTranslation("translation");
  function handleLoaded() {
    setLoaded(true);
  }
  //   const handleClick = () => {
  //     let url =
  //       locale == "pt"
  //         ? "/images/curriculo_atual.png"
  //         : "/images/curriculo_atual_ingles.png";
  //     let text =
  //       locale == "pt" ? "Currículo Kauã Villa Nova" : "CV Kaua Villa Nova";
  //     saveAs(url, text);
  //   };
  return (
    <div className={styles.cur}>
      <div className={styles.background} onClick={handleView}></div>
      <div>
        {loaded == false && (
          <Image className={styles.loading} src={Loading} alt="loading..." />
        )}
        <div className={styles.frame}>
          {locale == "pt" ? (
            <iframe
              loading="lazy"
              onLoad={handleLoaded}
              src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAE2XL2rDjE&#x2F;view?embed"
            ></iframe>
          ) : (
            <iframe
              loading="lazy"
              onLoad={handleLoaded}
              src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFqJw5ImNw&#x2F;view?embed"
            ></iframe>
          )}
        </div>
      </div>
      {/* <Button
        text={translate("baixar curriculo")}
        lightMode={true}
        icon={<BsDownload />}
        onclick={handleClick}
        link={locale == "pt" ? CurImage : CurImageEn}
        download="true"
      /> */}
    </div>
  );
}
