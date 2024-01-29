import "./Contact.scss";
import { TiSocialFacebook } from "react-icons/ti";
import { AiFillInstagram } from "react-icons/ai";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";

function Contacts() {
  const socialNet = [
    {
      id: 0,
      icon: <TiSocialFacebook />,
      link: "https://m.facebook.com/",
    },
    {
      id: 1,
      icon: <AiFillInstagram />,
      link: "https://www.instagram.com/",
    },
    {
      id: 2,
      icon: <TiSocialTwitter />,
      link: "https://twitter.com/",
    },
    {
      id: 3,
      icon: <TiSocialYoutube />,
      link: "https://www.youtube.com/",
    },
  ];

  const socialLi = socialNet.map((el) => (
    <li key={el.id}>
      <a href={el.link} target="_blanck" rel="noopener noreferrer nofollow">
        {el.icon}
      </a>
    </li>
  ));

  return (
    <div className="contacts">
      <ul>{socialLi}</ul>
    </div>
  );
}

export { Contacts };
