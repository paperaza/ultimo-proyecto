import { useAuth0 } from "@auth0/auth0-react";
import Home from "./pages/Home";
import Login from "./auth/Login";
import Logout from "./auth/Logout";

function App() {

  const{ isAuthenticated } = useAuth0();

  return (
    <div className="App">
      <header className="App-header">
        
        {isAuthenticated ? (//? si autentica lleveme al home 
          <>
          <Home/>
          <Logout/>
          </>
        ) : (//: si no autentica qudese en el Login
          <Login/>
        )}       

      </header>
    </div>
  );
}

export default App;
