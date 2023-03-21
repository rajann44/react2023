export default function Widget({ newsObjectList }) {
  return (
    <>
      <h6 className="text-uppercase">Latest Tech News</h6>
      <hr className="solid"></hr>
      {newsObjectList.articles !== null &&
        newsObjectList.slice(0, 2).map((singleNews) => (
          <div className="card my-3" key={singleNews.source.urlToImage}>
            <img
              src={
                !singleNews.urlToImage
                  ? "https://upload.wikimedia.org/wikipedia/commons/8/8a/OpenMoji-black_1F4F0.svg"
                  : singleNews.urlToImage
              }
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{singleNews.title.slice(0, 50)}</h5>
              <p className="card-text">
                {!singleNews.description
                  ? "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                  : singleNews.description.slice(0, 80)}
              </p>
            </div>
          </div>
        ))}
    </>
  );
}
