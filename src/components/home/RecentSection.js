import styles from './RecentSection.module.css';

const RecentSection = (props) => {
    return (
        <section className={styles.sections}>
            <h2>{props.heading}</h2>
            {props.array.map((item) => (
                <article key={item.id}>
                    <img src={item.snapshot} alt={item.alt} style={{ width: "100px", height: "100px", border: "1px solid #ccc" }} />
                    <h3>{item.title}</h3>
                </article>
            ))}
        </section>
    )
}

export default RecentSection;