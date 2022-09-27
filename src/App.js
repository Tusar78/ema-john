import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Inventory from "./Components/Inventory/Inventory";
import Login from "./Components/Login/Login";
import Registration from "./Components/Registration/Registration";
import NotFound from "./Components/NotFound/NotFound";
import Order from "./Components/Order/Order";
import Shop from "./Components/Shop/Shop";
import RequireAuth from "./Components/RequireAuth/RequireAuth";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/order" element={<Shop />} />
        <Route path="/order-review" element={<Order />} />
        <Route path="/manage-inventory" element={
          <RequireAuth>
            <Inventory />
          </RequireAuth>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
