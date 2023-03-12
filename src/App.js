import './App.css';
import Welcome from './components/Welcome';
import Form from './components/Form';
import Navbar from './components/Navbar';
import Weather from './components/Weather';
import Grid from './components/Grid';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <>
    {/*<Welcome name='Storage is still TODO' ></Welcome>
    <Form></Form>
    <Weather city="Sirsa"></Weather>*/}
    <Navbar/>
    <Routes>
        <Route path="/form-news" element={<><Grid/><Footer/></>} />
        <Route path="/acc" element={<div/>} />
        <Route path="/" element={<div text="Homepage">HELLO</div>} />
    </Routes>
    </>
  );
}

export default App;
