import styles from './card.module.css'
import Portions from './Portions/Portions';
import Box from './Box/Box';
import Like from './Like/Like';
import { Ing } from '../../state/cocktailsArr';

interface CardProps {
  name: string,
  ing: Ing[],
  desc: string,
  src: string,
  season: string,
}

const Card = (props: CardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.wrapper0}>
        <div className={styles.wrapper1}>
          <h2 className={styles.title}>{props.name}</h2>
          <div className={styles.panel1}>
            <div className={styles.wrapper2}>
              <h3 className={styles.ing2}>Ингридиенты :</h3>
              {props.ing.map((item) => {
                return (
                  <div className={styles.wrapper3} key={item.name}>
                    <p className={styles.ing}>{`${item.name} -`}</p>
                    <p className={styles.ing}>{item.vol}</p>
                    <p className={styles.ing}>{item.measure}</p>
                  </div>
                );
              })}
            </div>
            <div className={styles.control}>
              <Portions />
              <Box />
              <Like />
            </div>
          </div>
        </div>
        <div className={styles.panel0}>
          <img className={styles.img} src={props.src}></img>
        </div>
      </div>
      <p className={styles.description}>{props.desc}</p>
    </div>
  );
};

export default Card;
