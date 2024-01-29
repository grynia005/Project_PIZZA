import { Logo } from "../Logo/Logo";
import logo from "./images/logo-foot.avif";
import { GiFullPizza } from "react-icons/gi";
import "./FootBox.scss";

const FootBox = () => {
  return (
    <div className="foot_box">
      <div>
        <Logo img={logo} />
      </div>
      <div>
        <GiFullPizza />
        <a
          href="https://www.google.com/maps/place/1501+Broadway/@40.7571702,-73.9892465,17z/data=!4m7!3m6!1s0x89c25854e6ea8ee7:0xac4528e4f68b6cd!4b1!8m2!3d40.7571662!4d-73.9866662!16s%2Fg%2F11c5nz94hl?authuser=0&entry=ttu"
          target="_blanck"
          rel="noopener noreferrer nofollow"
        >
          1501 Broadway New York, NY 10036 US
        </a>
      </div>
    </div>
  );
};

export { FootBox };
