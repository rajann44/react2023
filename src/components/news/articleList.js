export default function ArticleList({ newsObjectList, mouseStyle }) {
  return (
    <>
      {newsObjectList.articles !== null &&
        newsObjectList.slice(0, 5).map((singleNews, index) => (
          <div
            className={`card mb-3 border-2 rounded-0 ${mouseStyle}`}
            key={index}
          >
            <div className="row g-0">
              <div className="col-md-3">
                <img
                  src={
                    !singleNews.urlToImage
                      ? "https://upload.wikimedia.org/wikipedia/commons/8/8a/OpenMoji-black_1F4F0.svg"
                      : singleNews.urlToImage
                  }
                  className="rounded-0  img-thumbnail"
                  alt="..."
                  style={{ width: "240px", height: "150px" }}
                />
              </div>
              <div className="col-md-9">
                <div className="card-body">
                  <h5 className="card-title">
                    {singleNews.title.slice(0, 60)}..
                  </h5>
                  <p className="card-text">
                    {!singleNews.description
                      ? "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                      : singleNews.description.slice(0, 160)}
                    ..
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      {singleNews.publishedAt}
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
}