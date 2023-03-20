import "./App.css";
import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import Grid from "./components/Grid";
import Footer from "./components/Footer";
import ImageSlider from "./components/ImageCarousel/ImageSlider";
import RandomQuote from "./components/Quotes/RandomQuote";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import Bmi from "./components/BMI/Bmi";
import Movie from "./components/Movie/Movie";
import GNews from "./components/news/googlenews";

function App() {
  return (
    <>
      {/*<Welcome name='Storage is still TODOOO' ></Welcome>
    <Form></Form>
    <Weather city="Sirsa"></Weather>*/}
      <Navbar title="Multi-Fun" />
      <Routes>
        <Route
          path="/"
          element={
            <div className="container d-flex justify-content-center">
              <h1>Homepage</h1>
            </div>
          }
        />
        <Route
          path="/form-weather"
          element={
            <>
              <Grid />
            </>
          }
        />
        <Route path="/image" element={<ImageSlider />} />
        <Route path="/quote" element={<RandomQuote />} />
        <Route path="/video" element={<VideoPlayer />} />
        <Route path="/bmi" element={<Bmi />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/news" element={<GNews />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
