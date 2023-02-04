import styles from './portions.module.css'

const Portions = () => {
  return (
    <div className={styles.portions}>
      <label className={styles.label}>Порции</label>
      <div className={styles.wrapper}>
        <button className={styles.button}>-</button>
        <p className={styles.button}>1</p>
        <button className={styles.button}>+</button>
      </div>
    </div>
  );
};

export default Portions;
