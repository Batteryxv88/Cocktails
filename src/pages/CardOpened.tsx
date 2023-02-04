import Header from "../components/Header/Header";
import { useAppSelector } from "../state/reduxHooks";
import Card from "../components/Card/Card";

const CardOpened = () => {
    const coctails = useAppSelector((state) => state.cocktails);
    const isCardOpen = useAppSelector((state) => state.isCardOpen);

    return ( 
        <>
            <Header />
            {coctails.map((item) => {
              if (isCardOpen === item.id) {
                return (
                  <Card
                    name={item.name}
                    ing={item.ingredients}
                    desc={item.description}
                    src={item.src_sqv}
                    season={item.season}
                    key={item.name}
                  ></Card>
                );
              }
            })}
        </>
     );
}
 
export default CardOpened;