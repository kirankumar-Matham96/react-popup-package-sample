import Popup from 'reactjs-popup'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'

import './index.css'

const Header = () => {
  const overlayStyles = {
    margin: '0',
    padding: '0',
    width: '100%',
    backgroundColor: 'red',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  }

  return (
    <nav className="nav-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="website logo"
        className="website-logo"
      />
      <div className="hamburger-menu">
        <Popup
          modal
          trigger={
            <button className="trigger-button" type="button">
              <GiHamburgerMenu />
            </button>
          }
          overlayStyle={overlayStyles}
        >
          {close => (
            <div className="popup-container">
              <div className="close-btn-container">
                <button
                  type="button"
                  className="close-button"
                  onClick={() => close()}
                >
                  <IoMdClose />
                </button>
              </div>
              <div className="model-content-container">
                <AiFillHome />
                <BsInfoCircleFill />
              </div>
            </div>
          )}
        </Popup>
      </div>
    </nav>
  )
}

export default Header
