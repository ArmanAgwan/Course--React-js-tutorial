import React from 'react'
import './myStylessheet.css'

function Stylessheet(props) {
  let className = props.primary ? 'primary' : ''
  return (
    <div>
      <h1 className={`${className} font-xl`}>Stylessheet</h1>
      </div>
  )
}

export default Stylessheet