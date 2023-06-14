import Home from "./Home";
import {Routes, Route} from 'react-router-dom'
import MovieLinks from "./MovieLinks";
import "./style.css";

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/movie/:title" element={<MovieLinks/>}></Route>
      </Routes>
    </div>
  );
}
export default App;
