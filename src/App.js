import "./App.css";
import NavBar from "./navbar/Navbar";
import Routee from "./routing/Routee";
import {Suspense} from 'react';

function App() {
  return (
    <div className="App">
      <Suspense fallback={<h1>Loading............!</h1>}>

      <NavBar />
      <Routee />
      </Suspense>

    </div>
  );
}

export default App;
