import styles from './grid.module.css'
import GridItem from "./GridItem";
import { useAppSelector } from "../../state/reduxHooks";

const Grid = () => {
  const coctails = useAppSelector((state) => state.cocktails);

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
