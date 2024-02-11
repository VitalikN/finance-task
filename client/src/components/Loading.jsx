import styles from "../sass/layouts/loading.module.scss";

const Loading = () => {
  return (
    <section className={styles.ball__section}>
      <div className={`${styles.container} ${styles.animationBall__container}`}>
        <div className={styles.box}>
          <div className={styles.ball}></div>
          <div className={styles.ball}></div>
          <div className={styles.ball}></div>
          <div className={styles.shadow}></div>
          <div className={styles.shadow}></div>
          <div className={styles.shadow}></div>
        </div>
      </div>
    </section>
  );
};
export default Loading;
