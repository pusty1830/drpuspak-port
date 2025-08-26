import React from 'react'
import SpinalHero from './components/SpinalHero'
import SpinalTreatment from './components/SpinalTreatment'
import SpinalCondition from './components/SpinalCondition'

const Spinal = () => {
  return (
    <div>
       <div class="mt-5">
            <SpinalCondition/>
       </div>
       
       
       
        <SpinalTreatment/>
    </div>
  )
}

export default Spinal
