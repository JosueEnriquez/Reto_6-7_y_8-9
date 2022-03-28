import './App.css';
import './assets/css/reset.css';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import { Routes, Route, BrowserRouter } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
