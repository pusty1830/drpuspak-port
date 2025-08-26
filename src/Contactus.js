import React from 'react'
import Contactsection from './components/Contactsection'
import ContactHero from './components/ContactHero'
import Contactinfo from './components/Contactinfo'

const Contactus = () => {
  return (
    <div>
         <div class="mt-5 pt-3">
           <Contactinfo/>
       </div>
        
        <Contactsection/>
    </div>
  )
}

export default Contactus

