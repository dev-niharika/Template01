// VideoBackground.js
import React from 'react';

function VideoBackground({ children }) {
  return (
    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel" style={{ marginTop: "-30px" }}>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://images.pexels.com/photos/1114690/pexels-photo-1114690.jpeg"
            width="100%"
            height="500px"
            alt='bgimage'
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>
              Some representative placeholder content for the first slide.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        {children}
      </div>
    </div>
  );
}

export default VideoBackground;