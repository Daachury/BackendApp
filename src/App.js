import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route , Switch } from "react-router-dom";
import LoginCom from "./components/LoginCompt";
import Home from "./Home";

function App() {
  return (
    <BrowserRouter>
    <div>
     
      <div>
        <Switch>
        
          <Route exact path="/" component={LoginCom} />
          
          <Route exact path="/home" component={Home} />
          
        </Switch>
      </div>
      
    </div>
  </BrowserRouter>
  );
}

export default App;