import React , {useState} from 'react'
import Header from '../components/Header'
import SideBar from '../components/SideBar'

const Main = () => {
  // Open and close menu on button click
  const [open , setOpen] = useState(true)
  const handleToggle = async ()=>{
    setOpen(prevState => !prevState)
  }
  return (
    <div>
      <Header handleToggle={handleToggle}/>
      <SideBar open = {open}/>
      <div>Dispaly Emails</div>
    </div>
  )
}

export default Main