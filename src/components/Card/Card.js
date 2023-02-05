import './Card.css';
import like from '../UI/Images/gray.png';
import Portions from './Portions/Portions';
import Box from './Box/Box';
import Like from './Like/Like';


const Card = (props) => {
  return (
    <div className="card">
      <div className="wrap">
        <div className="card__wrapper">
          <h2 className="card__title">{props.name}</h2>
          <div className="panel-new">
            <div className="card__descr-wrapper">
              <h3 className="card__descr-wrapper_ingridient">Ингридиенты :</h3>
              {props.ing.map((item) => {
                return (
                  <div className="ingredient-wrap">
                    <p className="card__ing">{`${item.name} -`}</p>
                    <p className="card__ing">{item.vol}</p>
                    <p className="card__ing">{item.measure}</p>
                  </div>
                );
              })}
            </div>
            <div className="control">
              <Portions />
              <Box />
              <Like />
            </div>
          </div>
        </div>
        <div className="card__panel">
          <img className="card__img" src={props.src}></img>
        </div>
      </div>
      <p className="card__description">{props.desc}</p>
    </div>
  );
};

export default Card;
