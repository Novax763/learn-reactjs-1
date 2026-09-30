import "./App.css";
import LonForm from "./LonForm";
import { UserContext } from "./contexts/UserContext";


function App() {
  // decalre variables.
  return (
    <UserContext.Provider value={{age: "19",head: "header",userName: "Darraj", name: "Soufaine", email: "Soufaine@gmail.com"}}>
    <div className="App" style={{ marginTop: "150px" }}>
      <LonForm  />
    </div>
    </UserContext.Provider>

  );
}

export default App;
