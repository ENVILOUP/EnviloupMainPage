import styles from './EnviloupMainCardSection.module.scss';

export default function EnviloupMainCardSection() {
  return (
    <>
      <div className={styles.EnviloupCardSection}>
        <img
          className={styles.EnviloupIMG}
          src="enviloupv2.png"
          alt="Enviloup"
        />
        <h1 className={styles.EnviloupHeader}>
          Enviloup Team
        </h1>
      </div>
    </>
  );
}
