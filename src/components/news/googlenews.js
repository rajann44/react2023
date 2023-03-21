import { useEffect, useState } from "react";
import Search from "../comcomp/search";
import ArticleList from "./articleList";
import Widget from "./widget";

export default function GNews() {
  const businessURL =
    "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=5240ee568e1d4b5cbc1c12177ac5f84c";
  const techURL =
    "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=5240ee568e1d4b5cbc1c12177ac5f84c";

  const [newsObject, setNewsObject] = useState([]);
  const [techObject, setTechObject] = useState([]);
  const [myStyle, setMyStyle] = useState("");

  useEffect(() => {
    console.log("In Effect");
    getAndSetBusinessNews(businessURL);
    getAndSetTech(techURL);
    console.log(newsObject);
  }, []);

  const handleOnChange = (event) => {
    //setText(event.target.value);
  };

  function handleOnClick() {
    //getBusinessNews(text);
  }

  const handleMouseEnter = () => {
    setMyStyle("bg-success p-2 text-dark bg-opacity-25");
    console.log("E");
  };
  const handleMouseLeave = () => {
    setMyStyle("");
    console.log("L");
  };

  async function getAndSetBusinessNews(url) {
    let wikiResponse = await fetch(url);
    let parsedData = await wikiResponse.json();
    setTechObject(parsedData.articles);
  }

  async function getAndSetTech(url) {
    let wikiResponse = await fetch(url);
    let parsedData = await wikiResponse.json();
    setNewsObject(parsedData.articles);
  }

  return (
    <div className="container my-3">
      <div className="row">
        <div className="col-9">
          <Search
            //handleText={text}
            handleOnChange={handleOnChange}
            handleOnClick={() => handleOnClick()}
          ></Search>
          <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <ArticleList
              newsObjectList={newsObject}
              mouseStyle={myStyle}
            ></ArticleList>
          </div>
        </div>
        <div className="col-3">
          <Widget newsObjectList={techObject}></Widget>
        </div>
      </div>
    </div>
  );
}
