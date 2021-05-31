import './App.css';
import Header from './components/Header';
import CarouselItem from './components/CarouselItem';
import HeadingCenter from './components/HeadingCenter';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Header/>
      <CarouselItem/>
      <HeadingCenter text="about"/>
      <About/>
    </div>
  );
}

export default App;
