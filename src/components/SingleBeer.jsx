import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { HomeOutlined } from "@ant-design/icons";

function SingleBeer() {
  const [beer, setBeer] = useState(null);
  const { beerId } = useParams();

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((res) => {
        setBeer(res.data);
        // console.log(res.data)
      });
  }, [beerId]);

  return (
    <div>
          <Link to="/">
            <header>
              <HomeOutlined className="home-icon" />
            </header>
          </Link>

          <div className="beer-and">

      {beer && ( // if Beer exist show it
        // you must insert an HTML Element here. Either <> and </> or <div> </div>
    
    <div className="single-content">
          <img
            src={beer.image_url}
            alt="empty-pic"
          />
          <div className="single-text">
          <h2 className="display-2">{beer.name}</h2>
          <h3 className="display-2 text-black-50">{beer.tagline}</h3>
          <p>{beer.first_brewed}</p>
          <p className="text-black-50">{beer.attenuation_level}</p>
          <p className="description">{beer.description}</p>
          <p className="text-black-50">{beer.contributed_by}</p>
          </div>
        </div>
      )}
        </div>
      </div>
  );
}

export default SingleBeer;
