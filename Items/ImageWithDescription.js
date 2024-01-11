import Image from "next/image";
import styles from "../styles/ImageWithDescription.module.css";
export default function ImageWithDescription({ src, alt, description }) {
  return (
    <div className={styles.container}>
      <Image src={src} alt={alt} width={80} height={80} loading="eager" />
      <div className={styles.desc}>{description}</div>
    </div>
  );
}
