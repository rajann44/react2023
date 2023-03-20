import { useEffect, useState } from "react";
import Search from "../comcomp/search";
import ArticleList from "./articleList";
import Widget from "./widget";

export default function GNews() {
  const [newsObject, setNewsObject] = useState([]);

  useEffect(() => {
    console.log("In Effect");
    getAndSetBusinessNews();
    console.log(newsObject);
  }, []);

  const handleOnChange = (event) => {
    //setText(event.target.value);
  };

  function handleOnClick() {
    //getBusinessNews(text);
  }

  async function getAndSetBusinessNews() {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=5240ee568e1d4b5cbc1c12177ac5f84c`;
    let wikiResponse = await fetch(url);
    let parsedData = await wikiResponse.json();
    setNewsObject(parsedData.articles);
    console.log(parsedData.articles);
  }

  return (
    <div className="container my-3">
      <div class="row">
        <div class="col-9">
          <Search
            //handleText={text}
            handleOnChange={handleOnChange}
            handleOnClick={() => handleOnClick()}
          ></Search>
          <ArticleList newsObjectList={newsObject}></ArticleList>
        </div>
        <div class="col-3">
          <Widget></Widget>
        </div>
      </div>
    </div>
  );
}
