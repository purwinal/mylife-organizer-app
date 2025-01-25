import styles from './Header.module.css';

const Header = (props) => {
    return (
        <header className={styles.header}>
            <div>
                {props.logo}
                <h1>{props.title}</h1>
            </div>
        </header>
    )
}

export default Header;