import React from 'react'
import Navigation from '../Components/Navigation'
import { Head } from '@inertiajs/inertia-react'
import LandingPageLayout from '../Layouts/LandingPageLayout'

export default function Home() {
  return (
    <div>

      {/* <Navigation /> */}
      <LandingPageLayout title='Home'> 
        <div className='max-w-6xl mx-auto'>
          <div>Home view Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid eaque totam soluta ab illo earum beatae quos consequatur blanditiis animi vitae, nisi ipsum perferendis ipsa excepturi! Omnis porro corporis amet?</div>
        </div>
      </LandingPageLayout>
    </div>
  )
}
