import React from 'react'
import PropTypes from 'prop-types'

import './style.scss'

const Header = ({ closeWebchat, preferences, logoStyle }) => (
  <div
    className="RecastAppHeader"
    style={{
      color: preferences.complementaryColor,
      backgroundColor: preferences.headerColor,
      flexDirection: 'row-reverse',
    }}
  >
    {/* <img className="RecastAppHeader--logo" src={preferences.headerLogo} style={logoStyle} />

    <div className="RecastAppHeader--title">{preferences.headerTitle}</div> */}

    <div className="RecastAppHeader--btn" onClick={closeWebchat}>
      <img src="/images/close.svg" style={{opacity: 0.5}} />
    </div>
  </div>
)

Header.propTypes = {
  closeWebchat: PropTypes.func,
  preferences: PropTypes.object,
  logoStyle: PropTypes.object,
}

export default Header
