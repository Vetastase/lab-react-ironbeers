import { useState, useEffect } from "react"; // <== IMPORT useEffect
import { Link } from "react-router-dom";
import axios from "axios"; // <== IMPORT axios
import { HomeOutlined } from "@ant-design/icons";

function ListBeers(/*props*/) {
  const [beers, setBeers] = useState([]);
  //const { deleteBeer } = props;
  
  useEffect(() => {
    // <== ADD THE EFFECT
    axios.get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => {
        console.log("response.data", response.data);
          setBeers(response.data);
    });
  }, []); // <- [] means: Run the effect only once, after initial render

  return (
    <div>
      <Link to="/">
        <header>
          <HomeOutlined className="home-icon" />
        </header>
      </Link>
      
      <div className="beers-map">

      {beers.map((beer) => (
        <div key={beer._id} className="beer-origin">
          <div className="beer-contents">
            <Link to={`/beers/${beer._id}`}>
              <img
                // style is not needed when you code size in CSS! Preferred way!
                // style={{ width: "80px" }}
                src={beer.image_url}
                alt="empty-beer"
              />
              <div className="divider"><hr></hr></div>
            </Link>

            <div className="text-beers">
              <h3>{beer.name}</h3>
              <p className="beer-tagline text-black-50">{beer.tagline}</p>
              <p>{beer.contributed_by}</p>
              {/*<button onClick={() => deleteBeer(beer._id)} className="btn-delete">
              Delete</button>*/}
            </div>
          </div>
        </div>
      ))}
        </div>
      </div>
  );
}

export default ListBeers;
