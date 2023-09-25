import React from 'react'
import { useOutletContext  } from 'react-router-dom'

// We are not using prop now
// const Emails = ({open}) => {
const Emails = () => {
  const {open} = useOutletContext()
  return (
    <div style={open ? {marginLeft : 250 , width : "100%"} : {width : "100%"} } >
        Hello
    </div>
  )
}

export default Emails