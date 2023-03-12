import { useState } from "react";

function ImageSlider() {
  const radhaKrishnJson = [
    {
      heading: "Radha",
      subtext: "Radha (Sanskrit: राधा, IAST: Rādhā), also called Radhika, is a Hindu goddess and the chief consort of the god Krishna.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/dc/Git_govind_large.jpg",
      boundingbox: ["29.4386978", "29.6815368"],
    },
    {
      heading: "Krishna",
      subtext: "Krishna (/ˈkrɪʃnə/; Sanskrit: कृष्ण IAST: Kṛṣṇa [ˈkr̩ʂɳɐ]) is a major deity in Hinduism. The name comes from a Sanskrit word (कृष्ण, kṛṣṇa) that means 'black', 'dark', 'dark blue' or 'the all attractive'.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/6/68/Krishna_with_flute.jpg",
      boundingbox: ["29.4386978", "29.6815368"],
    },
    {
      heading: "Radha Krishna Hare Hare",
      subtext: "Radha-Krishna (IAST rādhā-kṛṣṇa, Sanskrit: राधा कृष्ण) are collectively known within Hinduism as the combined forms of feminine as well as the masculine realities of God.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/5/5f/Baby_thief_Krishna_%28bazaar_art%2C_c.1950%27s%29.jpg",
      boundingbox: ["29.4386978", "29.6815368"],
    },
  ];

  const [current, setCurrent] = useState(0);

  function nextSlide() {
    setCurrent(current === radhaKrishnJson.length - 1 ? 0 : current + 1);
  }

  function prevSlide() {
    setCurrent(current === 0 ? radhaKrishnJson.length - 1 : current - 1);
  }

  return (
    <>
      <div id="carouselExampleCaptions" className="carousel slide container">
        <div className="carousel-inner">
          <div className="carousel-item active">
            {radhaKrishnJson.map(
              (radhaKrishnObj, index) =>
                current === index && (
                  <>
                    <div key={radhaKrishnObj.heading}>
                      <img
                        src={radhaKrishnObj.image}
                        className="d-block w-100"
                        alt={radhaKrishnObj.heading}
                        style={{height: "400px"}}
                      />
                    </div>
                    <div className="carousel-caption d-none d-md-block bg-secondary text-white bg-opacity-75">
                      <h5>{radhaKrishnObj.heading}</h5>
                      <p>
                      {radhaKrishnObj.subtext}
                      </p>
                    </div>
                  </>
                )
            )}
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          onClick={prevSlide}>
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          onClick={nextSlide}>
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </>
  );
}

export default ImageSlider;
