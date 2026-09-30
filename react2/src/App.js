import "./App.css";
import Header from "./Header";
import PostComponent from "./PostComponent";
import Botton from "./Botton";

function App() {
  // decalre variables.
  return (
    <div className="App">
      <Header />
      {/* ctrl / */}
      <nav className={"nav"}>
        <div style={{width : "500px"}} className="div-1">
        <PostComponent />
        <PostComponent />
        <PostComponent />
        <PostComponent />
        <PostComponent />
        <PostComponent />
        <PostComponent />
        <PostComponent />
        <PostComponent />
        </div>
        <div className="div-2">
          <div className="div-2-1">
            <Botton />
            <Botton />
            <Botton />
            <Botton />
            <Botton />
            <Botton />
            <Botton />
            <Botton />
            <Botton />
            <Botton />
            <Botton />
            <Botton />
          </div>
          <div className="div-2-2">
            <Botton />
          </div>
      </div>
      </nav>
    </div>
  );
}

export default App;

