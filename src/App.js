import './App.css';
import Header from './components/Header';
import CarouselItem from './components/CarouselItem';
import HeadingCenter from './components/HeadingCenter';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <CarouselItem/>
      <HeadingCenter text="about me"/>
      <About/>
      <HeadingCenter text="projects"/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
