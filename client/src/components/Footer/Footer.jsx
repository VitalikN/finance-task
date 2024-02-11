import styles from "../../sass/layouts/footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer__section}>
      <div className={`${styles.footer__container} ${styles.container}`}>
        <p className={`${styles.footer__text} `}>
          Developer:
          <a
            className={styles.footer__link}
            href="https://github.com/VitalikN"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vitalii Nozhenko
          </a>
        </p>
      </div>
    </footer>
  );
};
export default Footer;
