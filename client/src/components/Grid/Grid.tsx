import styles from './grid.module.css'
import GridItem from "./GridItem";
import { useAppSelector } from "../../state/reduxHooks";
import { useEffect, useState } from 'react';
import { fetchCocktails } from '../../state/cocktales/toolkitSlice';
import { useDispatch } from 'react-redux';
import { strongAlk } from '../../state/cocktales/toolkitSlice';


const Grid = () => {
  const dispatch = useDispatch();

  const coctails = useAppSelector((state) => state.toolkitSlice);

  // const [cocktails, setCocktails] = useState<any[]>([
  // ])

  // useEffect(() => {
  //   fetch("/cocktails").then(res => {
  //     if(res.ok) {
  //       return res.json()
  //     }
  //   }).then(jsonRes => setCocktails(jsonRes))
  // },[])

  useEffect(() => {
    dispatch(fetchCocktails());
  }, []);


  return (
    <div className={styles.grid}>
      {coctails.isLoading === true? <p>no item</p> : coctails.data.map((item, index) => (
      <GridItem
        img={item.src_sqv}
        name={item.name}
        key={`gridItem${index + 1}`}
        _id={item.id}
        class={item.class}
      />
    ))}
    </div>
  );
};

export default Grid;
