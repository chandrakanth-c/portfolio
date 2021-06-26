import './App.css';
import Header from './components/Header';
import CarouselItem from './components/CarouselItem';
import HeadingCenter from './components/HeadingCenter';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Header/>
      <CarouselItem/>
      <HeadingCenter text="about"/>
      <About/>
      <HeadingCenter text="projects"/>
      <Projects/>
      <HeadingCenter text="timeline"/>
      
    </div>
  );
}

export default App;
