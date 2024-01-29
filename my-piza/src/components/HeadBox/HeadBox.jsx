import { useContext, useState } from "react";
import { Logo } from "../Logo/Logo";
import { LogoHeadContext } from "../../context/LogoHeadContext";
import { Navigation } from "../Navigation/Navigation";
import { HeadMenu } from "../HeadMenu/HeadMenu";
import logo from "./images/logo.jpg";
import "./HeadBox.scss";
import { useSelector } from "react-redux";

const HeadBox = () => {
  const [showCart, setShowCart] = useState(false);
  const userLogin = useSelector((state) => state.user.login);

  const handleShowCart = () => {
    setShowCart(true);
  };
  const handleHideCart = () => {
    setShowCart(false);
  };

  return (
    <div className="header_box">
      <Logo img={logo} />
      <Navigation />
      <HeadMenu
        callOver={handleShowCart}
        callDown={handleHideCart}
        state={showCart}
      />
      {userLogin && <h3>{userLogin}</h3>}
    </div>
  );
};
export { HeadBox };
