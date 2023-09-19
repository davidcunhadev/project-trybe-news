import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import NavBar from '../NavBar/NavBar';
import LatestNewsCard from '../LatestNewsCard/LatestNewsCard';

function Layout() {
  return (
    <main>
      <Header />
      <LatestNewsCard />
      <NavBar />
      <Outlet />
    </main>
  );
}

export default Layout;
