import { NavLink } from 'react-router-dom';

const SidebarMenu = () => {
  return (
    <div className='nav'>
      <NavLink to='/'>
        <img src='' alt='taniuop' className='logo_imgage' />
      </NavLink>
      <ul>
        <li>
          <NavLink to='/userprofile'>Profile</NavLink>
        </li>
        <li>
          <NavLink to='/login'>Entrar</NavLink>
        </li>
        <li>
          <NavLink to='/tourlist'>Nuestros Tour</NavLink>
        </li>
        <li>
          <NavLink to='/about'></NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SidebarMenu;
