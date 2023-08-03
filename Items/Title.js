import styles from "../styles/Title.module.css"
export default function Title({title}){
    return(<div className={styles.container}><h3 className={styles.title} data-aos="zoom-in-up"  data-aos-duration="500">{title}</h3></div>)
}