import { Container } from "../Container/Container";
import { HeadBox } from "../HeadBox/HeadBox";
import "./Header.scss";

const Header = () => {
  return (
    <header>
      <Container>
        <HeadBox />
      </Container>
    </header>
  );
};

export { Header };
