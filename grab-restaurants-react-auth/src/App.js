import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from "./pages/Add";
import Update from "./pages/Update";
import Search from "./pages/Search";
import Restaurants from "./pages/Restaurants";
import NavBar from "./components/NavBar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import AuthService from "./services/auth.service";

function App() {
  const currentUser = AuthService.getCurrentUser();
  const logout = () =>{
    AuthService.logout();
  }
  return (
    <BrowserRouter>
      <NavBar currentUser={currentUser} logout={logout} />
      <div className="App">
        <Routes>
          <Route path="/" element={<Restaurants />} />
          <Route path="/Add" element={<Add />} />
          <Route path="/Update/:restaurantId" element={<Update />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
