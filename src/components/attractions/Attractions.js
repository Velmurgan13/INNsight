import React from "react";
import "./Attraction.css";
function Attractions() {
  return (
    <div className="attraction-container" style={{ padding: 50 }}>
      <div className="row attraction-heading">
        <div className="col text-center">
          <h4 className="content">STAGE COACH LODGE IN MONTEREY</h4>
          <h3 className="content">ATTRACTIONS</h3>
          <h5 className="content">Monterey, California</h5>
          <br />
        </div>
        <div className="attraction-description">
          <p className="content">
            Monterey Peninsula offers the vacation experience of a lifetime. The
            Monterey Peninsula has a beauty that entices visitors from all over
            the world. Monterey is located along the central coast of California
            about 120 miles south of San Francisco. The Monterey Peninsula is
            one of the most scenic areas of the world offering great ocean
            vistas and the famed 17 Mile Drive, a coastal toll road that offers
            breathtaking views of the bountiful Pacific Ocean and the rolling
            green hills of the world famous Pebble Beach and Spyglass Golf
            Courses.
          </p>
          <p className="content">
            Monterey is also home of the world's largest sea life exhibit, the
            Monterey Bay Aquarium. Pacific Grove, host to one of the oldest
            working lighthouses on the west coast, comes alive when the monarch
            butterfly populations migrate through this tiny coastal town. Carmel
            offers a picturesque white sand beach and old world charm with its
            quaint shops. Spectacular beaches, nine world champion golf courses,
            historic old adobes, Fisherman's Wharf, infamous Cannery Row,
            fabulous shopping, and gourmet restaurants all await you.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="image">
          <img
            className="image__img"
            src="./images/golfBall.webp"
            alt="golfBall"
          />
          <div className="image-overlap .image-overlap--blur">
            <div className="image-title">PLAY</div>
            <p className="image-description">
              GUESTS OF OUR HOTEL CAN GOLF AT BEAUTIFUL AND CHALLENGING COURSES
              IN MONTEREY
            </p>
          </div>
        </div>
        <div className="image">
          <img className="image__img" src="./images/nature.webp" alt="nature" />
          <div className="image-overlap .image-overlap--blur">
            <div className="image-title">EXPLORE</div>
            <p className="image-description">
              DISCOVER BREATHTAKING MONTEREY SCENERY AND HISTORIC LANDMARKS AS A
              GUEST OF OUR BOUTIQUE HOTEL
            </p>
          </div>
        </div>
        <div className="image">
          <img className="image__img" src="./images/house.webp" alt="house" />
          <div className="image-overlap .image-overlap--blur">
            <div className="image-title">DISCOVER</div>
            <p className="image-description">
              ICONIC MONTEREY ATTRACTIONS ARE MINUTES AWAY FROM OUR IDEAL
              LOCATION
            </p>
          </div>
        </div>
      </div>
      <div className="text-center col-6 mx-auto">
        <button type="button" className="btn btn-lg view-btn">
          VIEW MORE
        </button>
      </div>
    </div>
  );
}

export default Attractions;
