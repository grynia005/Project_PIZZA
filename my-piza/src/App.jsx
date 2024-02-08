import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getMenuItems } from "./redux/slice/menuSlice";
import { Suspense, lazy, useEffect } from "react";
import "./App.css";

import { Loading } from "./components/Loading/Loading";

const HomePage = lazy(() => import("./pages/Home"));
const MenuPage = lazy(() => import("./pages/MenuPage"));
const LoginPage = lazy(() => import("./pages/Login"));
const Counter = lazy(() => import("./pages/Counter"));
const Cart = lazy(() => import("./pages/Cart"));
const Order = lazy(() => import("./pages/Order"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMenuItems());
  }, []);

  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index="true" element={<MenuPage />} />
          <Route path="/log" element={<LoginPage />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order/new" element={<Order />} />
          <Route path="*" element={<NotFoundPage to={"/"} />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
