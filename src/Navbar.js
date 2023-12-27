import React, { useState, useEffect } from "react";
import { Link, useMatch, useResolvedPath, useNavigate } from "react-router-dom";
import loginIcon from './img/login_icon.png';
import loginIconExit from './img/exit-svgrepo-com.png';

export default function Navbar() {
  let navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');
  const [role, setRole] = useState(localStorage.getItem('role')); 

  useEffect(() => {
    const handleStorageChange = () => {
      setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true');
      setRole(localStorage.getItem('role')); 
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('role'); 
    setIsLoggedIn(false);
    setRole(null); 
    //navigate('/login');
  };

  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        <p>Tar</p>Hub
      </Link>
      <ul className="bar">
        <CustomLink to="/news">News</CustomLink>
        <CustomLink to="/quests">Quests</CustomLink>
        {/*{role === 'Admin' && <CustomLink to="/admin">Admin</CustomLink>}*/}
      </ul>
      
      <ul className="login">
        {isLoggedIn ? (
            <CustomLink to="/login">
          <li onClick={handleLogout}>
            <img src={loginIconExit} alt='' /> Logout
          </li>
            </CustomLink>
        ) : (
          <CustomLink to="/login">
            <li>
              <img src={loginIcon} alt='' /> Login
            </li>
          </CustomLink>
        )}
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
