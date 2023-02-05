import Facts from '../components/Facts/Facts';
import Grid from '../components/Grid/Grid';
import Slider from '../components/Slider/Slider';
import Header from '../components/Header/Header';

const Home = (props) => {
  return (
    <>
      <Header />
      <Slider arr={props.arr} />
      <Facts />
      <Grid />
    </>
  );
};

export default Home;
