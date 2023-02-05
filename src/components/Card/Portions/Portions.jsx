import './Portions.css';

const Portions = () => {
  return (
    <div className="portions">
      <label className="portions__label">Порции</label>
      <div className="portions__wrapper">
        <button className="portions__button">-</button>
        <p className="portions__button">1</p>
        <button className="portions__button">+</button>
      </div>
    </div>
  );
};

export default Portions;
