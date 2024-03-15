import "./App.css";
import NavBar from "./navbar/Navbar";
import Routee from "./routing/Routee";
import {Suspense} from 'react';
import Carousal from "./carousalComponent/Carousal";

function App() {
  return (
    <div className="App">
      <Suspense fallback={<h1>Loading............!</h1>}>

      <NavBar />
    <Carousal/>
      <Routee />
      </Suspense>

    </div>
  );
}

export default App;
