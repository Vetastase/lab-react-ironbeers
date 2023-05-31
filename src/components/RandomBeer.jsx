import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HomeOutlined } from "@ant-design/icons";
import axios from "axios";

function RandomBeer() {
  const [beer, setBeer] = useState(null);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((res) => {
        setBeer(res.data);
        // console.log(res.data)
      });
  }, []);

  return (
    
    <div>
    <Link to="/">
      <header>
        <HomeOutlined className="home-icon" />
      </header>
    </Link>

    <div className="random-beer">

      {beer && ( // if Beer exist show it
        // you must insert an HTML Element here. Either <> and </> or <div> </div>
   
          <div className="random-content">
          <img
            style={{ width: "300px" }}
            src={beer.image_url}
            alt="empty-pic"
          />
           <div className="random-text">
          <h2>{beer.name}</h2>
          <h3>{beer.tagline}</h3>
          <p>{beer.first_brewed}</p>
          <p>{beer.attenuation_level}</p>
          <p>{beer.description}</p>
          <p>{beer.contributed_by}</p>
          </div>
        </div>
      )
  }
    </div>
    </div>
  );
}

export default RandomBeer;
