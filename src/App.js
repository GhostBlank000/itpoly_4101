import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <section> <Navbar /> </section>
      <section> <Header /> </section>
      <section> <Home /> </section>
      <section> <Footer /> </section>
    </div>
  );
}

export default App;
