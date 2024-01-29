import { useSelector } from "react-redux";
import { MenuItems } from "./MenuItems/MenuItems";
import "./MenuList.scss";

const MenuList = () => {
  const data = useSelector((state) => state.menu.items);

  return (
    <div className="menu_box">
      <h1>Завжди знайдеться той, хто з'їсть останній шматочок</h1>
      <ul className="pizza_list">
        {data.map((el) => (
          <li key={el.id}>
            <MenuItems pizza={el} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export { MenuList };
