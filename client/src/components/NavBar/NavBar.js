import React, { useState } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

export default function NavBar({ user, setUser }) {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
            if (r.ok) {
                setUser(null);
            }
        });
    }
    return (
        <div>
            <nav className='navbar'>
                <Link to="/" className="navbar-logo">
                    Mitalist 
                </Link>
                <ul className={click ? 'navbar-list active' : 'navbar-list'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={handleClick}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/animes' className='nav-links' onClick={handleClick}>
                                Anime
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/favorites' className='nav-links' onClick={handleClick}>
                                Favorites
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/about' className='nav-links' onClick={handleClick}>
                                About
                            </Link>
                        </li>
                    </ul>
                    <div className='user-div'>
                      {user ? (
                          <button onClick={handleLogoutClick} className="logout-button">Logout</button>
                      ) : (
                          <>
                              {/* <Link to="/signup" className='user-link'>Signup</Link> */}
                              <Link to="/login" className='user-link'>Login</Link>
                          </>
                      )}
                    </div>
            </nav>
        </div>
    )
};