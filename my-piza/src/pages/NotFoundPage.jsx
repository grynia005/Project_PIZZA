import {NavLink} from 'react-router-dom'
const NotFoundPage = ({to}) => {
  return (
    <>
      <h2>Сторінку не знайдено</h2>
      <NavLink to={to} >Go to Home</NavLink>
    </>
  );
};

export { NotFoundPage}