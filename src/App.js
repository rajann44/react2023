import './App.css';
import Welcome from './components/Welcome';
import Form from './components/Form';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar></Navbar>
    <Welcome name='Rajan' ></Welcome>
    <Form></Form>
    </>
  );
}

export default App;
