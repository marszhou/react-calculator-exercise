import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ type, size, children, onClick }) => {
  return (
    <li className={`key ${type} size${size}`} onClick={onClick}>
      {children}
    </li>
  )
}

Button.propTypes = {
  type: PropTypes.oneOf(['number', 'operator', 'func', 'dot']),
  size: PropTypes.oneOf([1, 2]),
  onClick: PropTypes.func,
}

Button.defaultProps = {
  type: 'number',
  size: 1,
}

export default Button
