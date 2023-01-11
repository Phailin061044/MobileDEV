import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from "./pages/Add";
import Update from "./pages/Update";
import Search from "./pages/Search";
import Restaurants from "./pages/Restaurants";
import NavBar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
      <div className="App">
        <Routes>
          <Route path="/" element={<Restaurants />} />
          <Route path="/Add" element={<Add />} />
          <Route path="/Update/:restaurantId" element={<Update />} />
          <Route path="/Search" element={<Search />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
