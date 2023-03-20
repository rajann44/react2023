import { useEffect, useState } from "react";
import Search from "../comcomp/search";

export default function GNews() {
  const [text, setText] = useState("");

  useEffect(() => {
    console.log("In Effect");
  }, []);

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  function handleOnClick() {
    getWikiArticles(text);
  }

  async function getWikiArticles(query) {
    let url = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${query}&format=json`;
    let wikiResponse = await fetch(url);
    let parsedData = await wikiResponse.json();
    console.log(parsedData);
  }

  return (
    <div className="container">
      <Search
        handleText={text}
        handleOnChange={handleOnChange}
        handleOnClick={() => handleOnClick()}
      >
        {" "}
      </Search>
      <div
        className="card mb-3"
        style={{ maxWidth: "55rem", marginTop: "0.50rem" }}
      >
        <div className="row g-0">
          <div className="col-md-3">
            <img
              src="https://styles.redditmedia.com/t5_2th52/styles/communityIcon_c5f6mvu7s49a1.png"
              className="img-fluid img-thumbnail"
              style={{ height: "170px" }}
              alt="..."
            />
          </div>
          <div className="col-md-9">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
