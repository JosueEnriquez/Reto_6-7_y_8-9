import './App.css';
import './assets/css/reset.css';
import Hero from './components/Hero';
import Info from './components/Info';
import Navigation from './components/Navigation';

function App() {
  return (
    <>
      <Navigation/>
      <Hero/>
      <Info/>
    </>
  );
}

export default App;
