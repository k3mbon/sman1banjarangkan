import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NavbarComponent from './components/NavbarComponent';
import FooterComponent from './components/FooterComponent';
import Mars from './pages/MarsPage';
import VisiMisi from './pages/VisiMisi';
import SejarahPage from './pages/SejarahPage';
import ProfilPage from './pages/ProfilPage';
import KarakteristikPage from './pages/KarakteristikPage';
import IdentitasPage from './pages/IdentitasPage';
import ExtraPage from './pages/ExtraPage';
import ArtikelAll from './pages/ArtikelAll';
import DetailArtikel from './pages/DetailArtikel';

function App() {
  return (
    <div>
      <NavbarComponent />
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/mars" Component={Mars} />
        <Route path="/visi" Component={VisiMisi} />
        <Route path="/sejarah" Component={SejarahPage} />
        <Route path="/profil" Component={ProfilPage} />
        <Route path="/karakteristik" Component={KarakteristikPage} />
        <Route path="/identitas" Component={IdentitasPage} />
        <Route path="/extra" Component={ExtraPage} />
        <Route path="/semuaartikel" Component={ArtikelAll} />
        <Route path="/detailartikel/:postId" Component={DetailArtikel} />
      </Routes>
      <FooterComponent />
    </div>
  );
}

export default App;
