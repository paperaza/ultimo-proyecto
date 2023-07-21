import { useAuth0 } from "@auth0/auth0-react";
import Home from "./pages/Home";
import Login from "./auth/Login";
import Logout from "./auth/Logout";
import { Link, Route, Routes } from "react-router-dom";
import Favorites from "./pages/Favorites";
import SearchBar from "./componentes/SearchBar";

function App() {

  const{ isAuthenticated } = useAuth0();

  return (
    <div className="App">
      <header className="App-header">
        
        {isAuthenticated ? (//? si autentica lleveme al home 
          <>
          <nav>
          <Link to ="/favorites">Favoritos</Link>
          <Link to ="/home">Home</Link>
          <Link to ="/logout">Logout</Link>
          </nav>
          </>
        ) : (//: si no autentica qudese en el Login
          <Login/>
        )}       

      </header>

      <Routes>
        <Route path="/favorites" element={<Favorites/>}/>
        <Route path="/home" element={<SearchBar/>}/>
        <Route path="/logout" element={<Logout/>}/>
      </Routes>
    </div>
  );
}

export default App;
