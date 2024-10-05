import './App.css';
import Header from './components/header/Header';
import Herosection from './components/herosection/HeroSection';
import Footer from './components/footer/Footer';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";


function App() {
  return (
   <>
    <Header/>
    <Herosection/>
    <Footer/>
   </>
  );
}

export default App;
