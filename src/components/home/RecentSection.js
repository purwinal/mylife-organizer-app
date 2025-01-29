import styles from './RecentSection.module.css';

const RecentSection = (props) => {
    return (
        <section className={styles.container}>
            <h2>{props.heading}</h2>
            <div className={styles.body}>
                <div className={styles.bodyInner}>
                    {props.array.map((item) => (
                        <article className={styles.item} key={item.id}>
                            <img src={item.snapshot} alt={item.alt} style={{ width: "100px", height: "100px", border: "1px solid #ccc" }} />
                            <h3>{item.title}</h3>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default RecentSection;