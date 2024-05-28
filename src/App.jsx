import './Global.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Header } from './Components/Header/Header.jsx';
import { Footer } from './Components/Footer/Footer.jsx';
import { ProjectSelector } from './pages/ProjectSelector/projectSelector.jsx';
import { Afantasia } from './pages/Afantasia/Afantasia.jsx';

function App() {
  return (
    <>
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/3D-Portfolio/" element={<ProjectSelector />} />
          <Route path="/3D-Portfolio/afantasia" element={<Afantasia />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
