import "./App.css";
import Home from "./Home";
import MapFunction from "./MapFunction";
import Botton from "./Botton";


function App() {
  // decalre variables.

  return (
    <div className="App">
      <Home />
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <div style={{ width: "50%" }}>
            <MapFunction/>
        </div>
        <div>
          <Botton />
        </div>
      </div>
    </div>
  );
}



export default App;

