import { BrowserRouter as Router , Routes , Route} from "react-router-dom";
import Error404 from './Pages/Error404';
import Regester from './Pages/Regester';
import Login from './Pages/Login';
import GetStudent from "./Pages/GetStudent";

function App() {
  return (
    <>
    <Router>
        <Routes>
          <Route path="/" element={ <Login />} />
          <Route path="/Login" element={ <Login /> } />
          <Route path="/Regester" element={ <Regester />} />
          <Route path="/GetStudent/:id" element={ <GetStudent />} />
          <Route path="*" element={ <Error404 />} />
        </Routes>
    </Router>
    </>
  );
}

export default App;
