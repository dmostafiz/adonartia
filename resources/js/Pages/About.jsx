import { Container } from '@chakra-ui/react'
import React from 'react'
import Navigation from '../Components/Navigation'
import LandingPageLayout from '../Layouts/LandingPageLayout'

export default function About() {
  return (
    <div>
      <LandingPageLayout title='About us'>

        <Container maxW='container.xl'>
          <p>About Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque rerum commodi quos voluptate nemo quae ipsam, sed omnis, asperiores mollitia libero. Incidunt in ratione iusto et dolores doloremque inventore consequuntur.</p>

        </Container>

      </LandingPageLayout>
    </div>
  )
}
