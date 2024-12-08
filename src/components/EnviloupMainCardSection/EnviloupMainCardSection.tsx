import styles from './EnviloupMainCardSection.module.scss';

export default function EnviloupMainCardSection() {
  return (
    <>
      <div className={styles.mainCardSection}>
        <img
          className={styles.mainCardSection__img}
          src="enviloup-logo2.png"
          alt="Enviloup"
        />
        <h1 className={styles.mainCardSection__header}>
          Enviloup Team
        </h1>
      </div>
    </>
  );
}
