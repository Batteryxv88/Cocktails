import Header from "../components/Header/Header";
import { useSelector } from "react-redux";
import Card from "../components/Card/Card";

const CardOpened = () => {
    const coctails = useSelector((state) => state.coctails);
    const isCardOpen = useSelector((state) => state.isCardOpen);

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
                    seasos={item.season}
                  ></Card>
                );
              }
            })}
        </>
     );
}
 
export default CardOpened;