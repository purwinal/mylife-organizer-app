import styles from './Header.module.css';

const Header = (props) => {
    return (
        <header className={styles.header}>
            <div>
                <span className={styles.logo}>{props.logo}</span>
                <h1>{props.title}</h1>
            </div>
        </header>
    )
}

export default Header;