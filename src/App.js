
import { Switch , Route } from "react-router-dom"

// components 
import Login from "./components/Login/Login";
import Chats from "./components/Chat/Chats";

// context 
import AuthContextProvider from "./contexts/AuthContextProvider";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Switch>
          <Route path="/chats" component={Chats} />
          <Route path="/" component={Login} /> 
        </Switch>
      </AuthContextProvider>
    </div>
  );
}

export default App;
