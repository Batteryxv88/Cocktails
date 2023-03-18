import styles from './grid.module.css'
import GridItem from "./GridItem";
import { useAppSelector } from "../../state/reduxHooks";
import { MongoClient } from 'mongodb';

const Grid = () => {
  const coctails = useAppSelector((state) => state.cocktails);

  const mongoClient = new MongoClient('mongodb+srv://mvkovalyov:t2t6JifAQpkMjwmu@cluster0.kdp6x7v.mongodb.net/cocktales?retryWrites=true&w=majority')

mongoClient.db().collection('cocktales').find({}).toArray()

  return (
    <div className={styles.grid}>
      {coctails.map((item, index) => (
      <GridItem
        img={item.src_sqv}
        name={item.name}
        key={`gridItem${index + 1}`}
        id={item.id}
        class={item.class}
      />
    ))}
    </div>
  );
};

export default Grid;
