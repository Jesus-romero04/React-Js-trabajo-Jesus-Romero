import CartWidjet from './CartWidget';
import './NavBar.css'
import { NavLink, Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <nav className='navbar'>
        <Link to="/" className='brand'>
          <img src='/public/img/logo-tienda-jr.png' />
        </Link>
      <ul className='categories'>
        <NavLink to="/category/suculentas" className={({ isActive }) => isActive ? "category-active" : "category"}>Suculentas</NavLink>
        <NavLink to="/category/cactus" className={({ isActive }) => isActive ? "category-active" : "category"}>Cactus</NavLink>
        <NavLink to="/category/orquideas" className={({ isActive }) => isActive ? "category-active" : "category"}>Orquideas</NavLink>
        <NavLink to="/category/bonsai" className={({ isActive }) => isActive ? "category-active" : "category"}>Bonsai</NavLink>
      </ul>
      <CartWidjet />
    </nav>
  )
}

export default NavBar