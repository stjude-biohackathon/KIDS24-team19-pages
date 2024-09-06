import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from './image.png'

const Navbar = () => {
    
    const [activeLink, setActiveLink] = useState('/');
       
    return (
        <nav className={"navbar navbar-expand-lg bg-light shadow-md p-3 ${activeLink ? 'border-blue-600' : 'border-gray-200'}"}>
            <div className="container-fluid grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-6">
             <div className="flex justify-between items-center pt-1">
              <div className="flex items-center flex-shrink-0 ">
                <img className="h-9 w-26 mr-1" src={logo} alt="Logo" />
                  <p className="navbar-brand text-blue-600 font-bold text-xl pt-7" to="/">CoCoRV</p>
                 {/*<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>*/}
               
                </div>
                    <div className="navbar-nav hidden lg:flex ml-14 space-x-11">
                    {/* <div className="hidden lg:flex"> */}
                     <ul className="flex space-x-12">
                        <li className="nav-item">
                            <NavLink exact to="/" 
                             className={({ isActive }) => 
                                `text-gray-800 hover:text-red-800 no-underline ${isActive ? 'text-red-600 font-bold' : ''}`
                              }
                              onClick={() => setActiveLink('/')}
                            >Config</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" 
                             className={({ isActive }) => 
                                `text-gray-800 hover:text-red-800 no-underline ${isActive ? 'text-red-600 font-bold' : ''}`
                              }
                              onClick={() => setActiveLink('/')}
                            >About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/run-on-dnanexus" 
                             className={({ isActive }) => 
                                `text-gray-800 hover:text-red-800 no-underline ${isActive ? 'text-red-600 font-bold' : ''}`
                              }
                              onClick={() => setActiveLink('/')}
                            >DNAnexus</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/run-on-github"  
                           className={({ isActive }) => 
                            `text-gray-800 hover:text-red-800 no-underline ${isActive ? 'text-red-600 font-bold' : ''}`
                          }
                          onClick={() => setActiveLink('/')}
                          >GitHub</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/s3-resource-files" 
                             className={({ isActive }) => 
                                `text-gray-800 hover:text-red-800 no-underline ${isActive ? 'text-red-600 font-bold' : ''}`
                              }
                              onClick={() => setActiveLink('/')}
                            >S3 Files</NavLink>
                        </li>
                    
                        </ul>
                    </div>
                </div>
            </div>
        
    </nav>
    );
};

export default Navbar;
