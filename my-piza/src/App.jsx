import "./App.css";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { useDispatch, useSelector } from "react-redux";
import { getMenuItems } from "./redux/slice/menuSlice";
import { Suspense, lazy, useEffect } from "react";
import { NotFoundPage } from "./pages/NotFoundPage";
import { LoginPage } from "./pages/Login";
import { MenuPage } from "./pages/Menu";
// import { Counter } from "./pages/Counter";
import { Cart } from "./pages/Cart";
import { Order } from "./pages/Order";
import { Loading } from "./components/Loading/Loading";

// const MenuPage = lazy(() => import("./pages/Menu"));
const Counter = lazy(() => import("./pages/Counter"));
// const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMenuItems());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<HomePage />}>
        <Suspense fallback={<Loading />}>
          <Route index="true" element={<MenuPage />} />
          <Route path="/log" element={<LoginPage />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order/new" element={<Order />} />
          <Route path="*" element={<NotFoundPage to={"/"} />} />
        </Suspense>
      </Route>
    </Routes>
  );
}

export default App;
