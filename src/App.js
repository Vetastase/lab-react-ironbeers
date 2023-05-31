import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from "./components/HomePage"
import ListBeers from "./components/ListBeers"
import SingleBeer from "./components/SingleBeer"
import RandomBeer from "./components/RandomBeer"
import NewBeer from "./components/NewBeer"
// npm install --save @ant-design/icons -> Source: ant.design

function App(/*{beers, setBeers}*/) {

  /*function deleteBeer(id) {
    setBeers(beers => beers.filter(beer => {
      return beer._id !== id
    }))
  }

  function newbeer(addBeer) {
    setBeers([...beers, addBeer])
  }

  function updateBeer(addBeer) {
    setBeers(beers => {

      return beers.map(beer => 
        beer._id === addBeer._id ? addBeer : beer)
    })
  }*/

  return (
    <div className="App">


      <Routes>
        <Route path="/" element={<HomePage /> } />
        <Route path="/beers" element={<ListBeers /*deleteBeer={deleteBeer}*/ />} />
        <Route path="/beers/:beerId" element={<SingleBeer />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/new-beer" element={<NewBeer /*newbeer={newbeer} updateBeer={updateBeer}*/ />} />
      </Routes>

    </div>
  );
}

export default App;
