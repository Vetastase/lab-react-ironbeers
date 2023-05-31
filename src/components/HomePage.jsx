import React from "react";
import { Link } from "react-router-dom";
import Beers from "../assets/beers.png";
import NewBeer from "../assets/new-beer.png";
import RandomBeer from "../assets/random-beer.png";

function HomePage() {
  return (
    <div className="ironbeer">
      <div className="ironcontent">
      <Link to="/beers">
        <img src={Beers} alt="" />
      </Link>
      <h1>All Beers</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacinia interdum ex nec finibus. Integer in nisi eleifend dolor tincidunt iaculis.<br></br> Donec rhoncus sem sed velit accumsan, ut maximus ipsum eleifend. Nullam condimentum posuere quam, vel faucibus diam porttitor eget.</p>


        <Link to="/random-beer">
        <img src={RandomBeer} alt="" />
      </Link>
      <h1>Random Beer</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacinia interdum ex nec finibus. Integer in nisi eleifend dolor tincidunt iaculis.<br></br> Donec rhoncus sem sed velit accumsan, ut maximus ipsum eleifend. Nullam condimentum posuere quam, vel faucibus diam porttitor eget.</p>


    <Link to="/new-beer">
    <img src={NewBeer} alt="" />
  </Link>
  <h1>New Beer</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacinia interdum ex nec finibus. Integer in nisi eleifend dolor tincidunt iaculis.<br></br> Donec rhoncus sem sed velit accumsan, ut maximus ipsum eleifend. Nullam condimentum posuere quam, vel faucibus diam porttitor eget.</p>
      </div>
    </div>
  );
}

export default HomePage;
