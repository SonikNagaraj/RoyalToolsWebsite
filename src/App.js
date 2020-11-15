//import './App.css';
import Home from './components/Home'
import About from './components/About'
import Products  from './components/Products';
import Contact from './components/Contact'
import Footer from './components/Footer'
function App() {
  return (
    <div className="App">
      <Home />
      <hr />
      <About />
      <hr />
      <Products />
      <br />
      <hr />
      <br />
      <Contact />
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default App;
