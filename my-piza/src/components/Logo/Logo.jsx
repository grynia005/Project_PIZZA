import { Link } from "react-router-dom";
import './Logo.scss'

const Logo = ({ img }) => {
  return (
    <div className="logo_box">
      <Link to={"/"}>
        <div className="flex">
          <img src={img} alt="logo" />
        </div>
      </Link>
    </div>
  );
};

export { Logo };
