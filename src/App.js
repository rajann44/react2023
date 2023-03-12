import './App.css';
import Navbar from './components/Navbar';
import Grid from './components/Grid';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router';
import ImageSlider from './components/ImageCarousel/ImageSlider';
import RandomQuote from './components/Quotes/RandomQuote';

function App() {
  return (
    <>
    {/*<Welcome name='Storage is still TODO' ></Welcome>
    <Form></Form>
    <Weather city="Sirsa"></Weather>*/}
    <Navbar/>
    <Routes>
        <Route path="/" element={<div className='container d-flex justify-content-center'><h1>Homepage</h1></div>} />
        <Route path="/form-news" element={<><Grid/><Footer/></>} />
        <Route path="/image" element={<ImageSlider/>} />
        <Route path="/quote" element={<RandomQuote/>} />
    </Routes>
    </>
  );
}

export default App;
