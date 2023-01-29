import React, { useState, useEffect } from 'react'
import { HashLink } from 'react-router-hash-link'
import { Link } from 'react-router-dom'

// import {Minh-Tien-logo} from '../../assets/images/Minh-Tien-Logo.svg'
import images from '../../assets/images'
import { publicRoutes } from '../../routes'
import './Header.css'

const Header = () => {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showPanel, setShowPanel] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [hoverIndex, setHoverIndex] = useState(null);

  const controlNavbar = () => {
    if(typeof window !== 'undefined') {
      if(window.scrollY >lastScrollY) { //if scroll down hide the nav bar
        setShowNav(false);
      } else { // if scroll up show the navbar
        setShowNav(true);
      }

      //remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  const handlePanelHeight = () => {
    if(typeof window !== 'undefined') {
      if(window.scrollY < lastScrollY && window.scrollY !== 0) {
        setShowPanel(true);
      } else {
        setShowPanel(false)
      }
      setLastScrollY(window.scrollY);
    }
  }

  const handleToggleMenu = () => (
    setToggleMenu((prev) => !prev)
  )

  useEffect(() => {
    if(typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      window.addEventListener('scroll', handlePanelHeight);
      //cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
        window.removeEventListener('scroll', handlePanelHeight);
      }
    }
  },[lastScrollY])
  return (
    <div className={`header ${showNav ? 'active' : 'hidden'}`} id='header'>
      {/* <div className='header__background'></div> */}
      
      <div className='header__wrapper'>
        <Link to='/' >
          <img className='header__wrapper-logo' src={images.logo} alt='Minh-Tien-logo' />
        </Link>
        <div className='header__wrapper-navbar'>
          <ul className='header__wrapper-navbar_list'>
            {publicRoutes.map((route, index) => {
              if(route.title !== 'Trang chủ') {
                return (
                  <Link 
                    key={'nav-item' + index} 
                    className='nav-item' 
                    to={route.path} 
                    onMouseEnter={() => {
                      setShowSubMenu(true)
                      setHoverIndex(index)
                    }}
                  >
                      <li>{route.title}</li>
                  </Link>
                )
              } else return undefined;
            })}
          </ul>
        </div>
        <button type='button' className='header__wrapper-navbar_btn' onClick={() => handleToggleMenu()}>
            {toggleMenu
                ? <img src={images.xmarkBtn} alt='menu-x-btn'/>
                : <img src={images.barBtn} alt='menu-bar-btn'/>
            }
        </button>

        {toggleMenu && (
          <div className={`sub-menu-container ${toggleMenu ? 'show' : 'unshow'}`}>
            <div className='scroll-content'>
              {publicRoutes.map((route, index) => {
                if(route.title !== 'Trang chủ') {
                  return (
                    <div key={'sub-menu-items' +index} className='sub-menu-items'>
                      <h2><Link to={route.path} onClick={() => setToggleMenu(false)}>{route.title}</Link></h2>
                      <div className='sub-menu-item-list'>
                        {route.subContents.map((subContent, index) => (
                          <div key={'sub-menu-item-list' + index}>
                            <HashLink to={subContent.subPath} onClick={()=>{setToggleMenu(false)}}>{subContent.subTitle}</HashLink>
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                } else return undefined;
              })}
            </div>
          
            
          </div>
        )}
      </div>

      <div className={ `menu-panel ${showPanel ? 'menu-panel-active' : 'menu-panel-hidden'} ` } />
      <div className={
                        `menu-container ${showSubMenu ? 'onhover' : '' }`} 
                        onMouseLeave={ () => {
                          setShowSubMenu(false)
                          setHoverIndex(null)
                        }
                      }>
          {hoverIndex && (
            <div className='menu-item'>
              <h3>{publicRoutes[hoverIndex].title}</h3>
              <div className='menu-item-list'>
                {publicRoutes[hoverIndex].subContents.map((subContent, index) => (
                  <li key={'menu-item-list'+ index}>
                    <HashLink to={subContent.subPath} onClick={() => {setShowSubMenu(false)
                          setHoverIndex(null)}}>{subContent.subTitle}</HashLink>
                  </li>
                ))}
              </div>
            </div>
          )}       
      </div>
    </div>
  )
}

export default Header