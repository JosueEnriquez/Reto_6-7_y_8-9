import './App.css';
import './assets/css/reset.css';
import Cursos from './components/Cursos';
import Hero from './components/Hero';
import Info from './components/Info';
import Navigation from './components/Navigation';

function App() {
  return (
    <>
      <Navigation/>
      <Hero/>
      <Info/>
      <Cursos/>
    </>
  );
}

export default App;
