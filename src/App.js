import './App.css';
import Welcome from './components/Welcome';
import Form from './components/Form';
import Navbar from './components/Navbar';
import Weather from './components/Weather';
import Grid from './components/Grid';

function App() {
  return (
    <>
    <Navbar></Navbar>
    {/*<Welcome name='Storage is still TODO' ></Welcome>
    <Form></Form>
    <Weather city="Sirsa"></Weather>*/}
    <Grid></Grid>
    </>
  );
}

export default App;
