import "./App.css";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { useDispatch, useSelector } from "react-redux";
import { getMenuItems } from "./redux/menuSlice";
import { useEffect } from "react";
import { NotFoundPage } from "./pages/NotFoundPage";
import { LoginPage } from "./pages/Login";
import { MenuPage } from "./pages/Menu";
import { Counter } from "./pages/Counter";
import { Cart } from "./pages/Cart";

function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMenuItems());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<HomePage />}>
        <Route index="true" element={<MenuPage />} />
        <Route path="/log" element={<LoginPage />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFoundPage to={"/"} />} />
      </Route>
    </Routes>
  );
}

export default App;
