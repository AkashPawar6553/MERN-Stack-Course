import React from 'react'
import MainNavBar from '../Components/MainNavBar'
import AboutUs from './AboutUs'
import ContactUs from './ContactUS'

 
const HomePage = () => {
  return (
<div>
<div className="container">
<MainNavBar />
</div>
 <AboutUs />
 <ContactUs />
</div>
  )
}
 
export default HomePage