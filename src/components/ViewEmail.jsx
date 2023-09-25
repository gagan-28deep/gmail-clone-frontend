import React from 'react'
import { useOutletContext } from 'react-router-dom'
const ViewEmail = () => {

  const {open} = useOutletContext()
  return (
    <div style={open ? {marginLeft : 250 , width : "100%"} : {width : "100%"} } >
        Hello from view
    </div>
  )
}

export default ViewEmail