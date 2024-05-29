import './Global.css'
import { HashRouter, Route, Routes } from 'react-router-dom';

import { Header } from './Components/Header/Header.jsx';
import { Footer } from './Components/Footer/Footer.jsx';
import { ProjectSelector } from './pages/ProjectSelector/projectSelector.jsx';
import { Afantasia } from './pages/Afantasia/Afantasia.jsx';

function App() {
  return (
    <>
      <HashRouter>
        <Header/>
          <Routes>
            <Route path="/" element={<ProjectSelector />} />
            <Route path="/afantasia" element={<Afantasia />} />
          </Routes>
        <Footer />
      </HashRouter>
    </>
  )
}

export default App
