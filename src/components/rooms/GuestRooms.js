import React from "react";
import "./GuestRooms.css";
function GuestRooms() {
  return (
    <div className="room-container">
      <div className="row room-row">
        <div className="col-8">
          <div className="room-image">
            <img
              className="room-image__img img-fluid"
              src="./images/guest-room.jpeg"
              alt="golfBall"
            />
            <div className="room-image-overlap">
              <div className="room-image-title">
                TREAT YOURSELF WITH OUR
                <h3 className="room-image-description">SPACIOUS AND</h3>
                <h4 className="room-image-description"> LUXURIOUS ROOMS</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4">
          <h3 className="content">GUEST</h3>
          <h4 className="content">ROOMS</h4>
          <p className="content">
            The Monterey Stage Coach Lodge offers premium accommodation options
            in Monterey. Our well-appointed Monterey Hotel Rooms will help you
            enjoy a luxurious stay in Monterey. Whether you are a business
            traveler or you are on a vacation, we assure you that you will find
            our Monterey hotel rooms to be a choice you won’t regret for your
            accommodation needs.
          </p>
          <p className="content">
            We have a variety of amenities to provide you with the most
            comfortable stay in Monterey. At the same time, at the Monterey
            Stage Coach Lodge, we are also very much aware of the fact that
            great hotel accommodations are not just a matter of cozy rooms and a
            variety of amenities, which we have, but the overall experience lies
            in serving every guest with a smile. We have a very friendly and
            helpful staff that is ready to go the extra mile to ensure that you
            enjoy your time in Monterey with a memorable stay. You will love our
            hospitality and our friendly services.
          </p>
        </div>
        <div className="text-center col-6 mx-auto">
          <button type="button" className="btn btn-lg view-btn">
            VIEW MORE
          </button>
        </div>
      </div>
    </div>

    // <div className="row">
    //   <div className="col-7"></div>
    //   {/* <div className="image"> */}
    //   <img
    //     className="image__img"
    //     src="./images/guest-room.jpeg"
    //     alt="golfBall"
    //   />
    //   {/* <div className="image-overlap .image-overlap--blur">
    //       <div className="image-title">PLAY</div>
    //       <p className="image-description">
    //         GUESTS OF OUR HOTEL CAN GOLF AT BEAUTIFUL AND CHALLENGING COURSES IN
    //         MONTEREY
    //       </p>
    //     </div> */}
    //   {/* </div> */}
    //   <div className="col-5">
    //     {/* <div className="text-right"> */}
    //     <h2>Monterey, CA Attractions</h2>
    //     <br />
    //     <p>
    //       Monterey is also home to the world's largest sea life exhibit, the
    //       Monterey Bay Aquarium. Pacific Grove, the host to one of the oldest
    //       working lighthouses on the west coast, comes alive when the monarch
    //       butterfly populations migrate to this tiny coastal town. Carmel offers
    //       a picturesque white sand beach and old-world charm with its quaint
    //       shops. These spectacular beaches, nine world champion golf courses,
    //       historic old adobes, Fisherman's Wharf, infamous Cannery Row, fabulous
    //       shopping, and gourmet restaurants all await you. And The Stage Coach
    //       Lodge offers the perfect quaint and memorable place to stay when
    //       visiting Monterey.
    //     </p>
    //     {/* </div> */}
    //   </div>
    // </div>
  );
}

export default GuestRooms;
