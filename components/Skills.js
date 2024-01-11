import styles from "../styles/Skills.module.css";
import ImageWithDescription from "@/Items/ImageWithDescription";
import { useState } from "react";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { useTranslation } from "next-i18next";
export default function Skills() {
  const [viewMore, setViewMore] = useState(false);
  const { t: translate } = useTranslation("translation");
  function handleView() {
    setViewMore(!viewMore);
  }
  const skillsObj = [
    {
      src: "/images/html_logo.png",
      alt: "HTML logo",
      description: "HTML",
    },
    {
      src: "/images/css_logo.png",
      alt: "CSS logo",
      description: "CSS",
    },
    {
      src: "/images/js_logo.png",
      alt: "JavaScript logo",
      description: "JavaScript",
    },
    {
      src: "/images/react_logo.png",
      alt: "React.js logo",
      description: "React.js",
    },
    {
      src: "/images/nextjs_logo.png",
      alt: "Next.js logo",
      description: "Next.js",
    },
    {
      src: "/images/github_logo.png",
      alt: "Github logo",
      description: "GitHub",
    },
    {
      src: "/images/php-logo.png",
      alt: "PHP logo",
      description: "PHP",
    },
    {
      src: "/images/mysql-logo.jpg",
      alt: "MySQL logo",
      description: "MySQL",
    },
    {
      src: "/images/cpp_logo.png",
      alt: "C++ logo",
      description: `C ${translate("e")} C++`,
    },
    {
      src: "/images/python_logo.png",
      alt: "Python logo",
      description: "Python",
    },
    {
      src: "/images/jquery.svg",
      alt: "JQuery logo",
      description: "JQuery",
    },
    {
      src: "/images/bootstrap-logo.png",
      alt: "Bootstrap logo",
      description: "Bootstrap",
    },
    {
      src: "/images/wordpress_logo.png",
      alt: "WordPress logo",
      description: "WordPress",
    },
  ];
  const displayedImages = viewMore ? [...skillsObj] : skillsObj.slice(0, 8);

  return (
    <section>
      <div id="skills" className={`${styles.skills}`}>
        {displayedImages.map((image, index) => (
          <ImageWithDescription
            key={index}
            src={image.src}
            alt={image.alt}
            description={image.description}
          />
        ))}
      </div>

      <div className={styles.buttonDiv}>
        <button
          onClick={() => handleView()}
          className={`${styles.button} ${viewMore ? styles.up : styles.down}`}
        >
          <MdOutlineArrowBackIosNew />
        </button>
      </div>
    </section>
  );
}
