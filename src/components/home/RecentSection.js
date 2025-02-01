import styles from './RecentSection.module.css';

const RecentSection = (props) => {
    return (
        <section className={styles.container}>
            <h2>{props.heading}</h2>
            <div className={styles.body}>
                <div className={styles.bodyInner}>
                    {props.array.map((item) => (
                        <article className={styles.item} key={item.id}>
                            <div className={styles.imgContainer}>
                                <img src={item.snapshot} alt={item.alt} className={styles.img} />
                            </div>
                            <div className={styles.titleContainer}>
                                <h3>{item.title}</h3>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default RecentSection;