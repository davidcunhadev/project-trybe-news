import Card from '../../Components/Card/Card';
import Header from '../../Components/Header/Header';
import MainCard from '../../Components/MainCard/MainCard';
import NavBar from '../../Components/NavBar/NavBar';
import styles from './Home.module.css';

function Home() {
  // const location = useLocation();
  return (
    <main>
      <Header />
      <MainCard />
      <NavBar />
      <div className={ styles.cardsGrid }>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <button className={ styles.button }>MAIS NOTÍCIAS</button>
    </main>
  );
}

export default Home;
