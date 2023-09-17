import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Favorites from './Pages/Favorites/Favorites';
import News from './Pages/News/News';
import Release from './Pages/Release/Release';
import NotFound from './Pages/NotFound/NotFound';
import NewsProvider from './Context/NewsProvider';

function App() {
  return (
    <NewsProvider>
      <Routes>
        <Route index Component={ Home } />
        <Route path="/release" Component={ Release } />
        <Route path="/news" Component={ News } />
        <Route path="/favorites" Component={ Favorites } />
        <Route path="/*" Component={ NotFound } />
      </Routes>
    </NewsProvider>
  );
}

export default App;
