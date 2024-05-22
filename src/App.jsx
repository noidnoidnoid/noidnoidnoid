import './Global.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProjectSelector from './pages/ProjectSelector/projectSelector.jsx';
import Afantasia from './pages/Afantasia/Afantasia.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProjectSelector />} />
          <Route path="/afantasia" element={<Afantasia />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
