import { useState } from "react";

export default function VideoPlayer() {
  const videos = {
    deer: "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4",
    snail:
      "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4",
    cat: "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4",
  };

  const [videoURL, setVideoURL] = useState(videos.deer);
  const videoNames = Object.keys(videos);

  function onClickHandler(video) {
    setVideoURL(videos[video]);
  }

  return (
    <>
      <div className="container d-flex justify-content-center">
        <video key={videoURL} width="375" height="250" controls>
          <source src={videoURL} type="video/mp4" />
        </video>
      </div>
      <div className="text-center my-2">
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Select Video
          </button>
          <ul className="dropdown-menu">
            {videoNames.map((video) => {
              return (
                <li key={video}>
                  <span
                    onClick={() => onClickHandler(video)}
                    className="dropdown-item"
                  >
                    {video}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
