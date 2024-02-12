import styles from "../../sass/layouts/header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles.container} ${styles.header__container}`}>
        <img
          className={styles.logo}
          width={50}
          src="/favicon.ico"
          alt="incode logo"
        />
        <h2 className={styles.title}>Finance</h2>
      </div>
    </header>
  );
};

export default Header;
