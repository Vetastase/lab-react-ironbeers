import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HomeOutlined } from "@ant-design/icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function NewBeer(/*{ beer, newbeer, updateBeer }*/) {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [first_brewed, setFirst_Brewed] = useState("");
  const [brewers_tips, setBrewers_Tips] = useState("");
  const [attenuation_level, setAttenuation_Level] = useState("");
  const [contributed_by, setContributed_By] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    // <== HANDLER FUNCTION
    // Prevent page reload on submit
    e.preventDefault();

    // Create the body (newbeer in this case) for the POST request
      const newbeer = {

      name,
      tagline,
      description,
      first_brewed,
      brewers_tips,
      attenuation_level,
      contributed_by,
    };

      /*updateBeer(beer)*/

    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", newbeer)
      .then((response) => {
        setName("");
        setTagline("");
        setDescription("");
        setFirst_Brewed("");
        setBrewers_Tips("");
        setAttenuation_Level("");
        setContributed_By("");

        navigate("/beers");
      });
  };

  return (
    <div>
      <Link to="/">
        <header>
          <HomeOutlined className="home-icon" />
        </header>
      </Link>

      <div className="new-content d-flex justify-content-center">
      <form onSubmit={handleSubmit} className="d-flex flex-column">
        <div className="remains row">
          <label>Name</label>
          <input
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />

          <label>Tagline</label>
          <input
            type="text"
            name="tagline"
            onChange={(e) => setTagline(e.target.value)}
            value={tagline}
          />

          <label>Description</label>
          <input
            type="text"
            name="description"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />

          <label>First Brewed</label>
          <input
            type="text"
            name="first_brewed"
            onChange={(e) => setFirst_Brewed(e.target.value)}
            value={first_brewed}
          />

          <label>Brewers Tips</label>
          <input
            type="text"
            name="brewers_tips"
            onChange={(e) => setBrewers_Tips(e.target.value)}
            value={brewers_tips}
          />

          <label>Attenuation Level</label>
          <input
            type="number"
            name="attenuation_level"
            onChange={(e) => setAttenuation_Level(e.target.value)}
            value={attenuation_level}
          />

          <label>Contributed By</label>
          <input
            type="text"
            name="contributed_by"
            onChange={(e) => setContributed_By(e.target.value)}
            value={contributed_by}
          />
        </div>

        <button type="submit">ADD NEW</button>
      </form>
    </div>
    </div>
  );
}

export default NewBeer;
