import { Outlet } from 'react-router-dom';
import { useContext } from 'react';
import Header from '../Header/Header';
import NavBar from '../NavBar/NavBar';
import LatestNewsCard from '../LatestNewsCard/LatestNewsCard';
import NewsContext from '../../Context/NewsContext';
import IsLoading from '../IsLoading/IsLoading';

function Layout() {
  const { loadingNews } = useContext(NewsContext);

  return (
    <main>
      <Header />
      {loadingNews ? <IsLoading /> : (
        <div>
          <LatestNewsCard />
          <NavBar />
          <Outlet />
        </div>
      )}
    </main>
  );
}

export default Layout;
