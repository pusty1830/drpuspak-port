import React from 'react'
import CranialCondition from './components/CranialCondition'
import CranialHero from './components/CranialHero'
import CranialTreatment from './components/CranialTreatment'

const Cranial = () => {
  return (
    <div>
        <div class="mt-5">
           <CranialCondition/>
       </div>
       
       
        <CranialTreatment/>
    </div>
  )
}

export default Cranial
