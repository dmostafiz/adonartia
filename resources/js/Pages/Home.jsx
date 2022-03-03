import React from 'react'
import Navigation from '../Components/Navigation'
import { Head } from '@inertiajs/inertia-react'
import LandingPageLayout from '../Layouts/LandingPageLayout'
import LandingPageBanner from '../Components/LandingPageBanner'
import { Avatar, AvatarGroup, Box, Center, Container, HStack, Image, Skeleton, Stack, Wrap, WrapItem } from '@chakra-ui/react'
import { PhoneIcon } from '@heroicons/react/outline'

export default function Home() {
  return (
    <div>

      {/* <Navigation /> */}
      <LandingPageLayout title='Home'>

        <LandingPageBanner />

        <Container maxW='container.xl'>

          <Center bg='gray.700' h='100px' color='white' mb='5px' mt='305px'>
            This is the Center
          </Center>

          <HStack my='305px'>
            <Center w='40px' h='40px' bg='tomato' color='white'>
              <PhoneIcon />
            </Center>
            <Center w='40px' h='40px' bg='tomato' color='white'>
              <Box as='span' fontWeight='bold' fontSize='lg'>
                1
              </Box>
            </Center>
          </HStack>

          <Wrap my='305px'>
            <WrapItem>
              <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
            </WrapItem>
            <WrapItem>
              <Avatar name='Kola Tioluwani' src='https://bit.ly/tioluwani-kolawole' />
            </WrapItem>
            <WrapItem>
              <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
            </WrapItem>
            <WrapItem>
              <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
            </WrapItem>
            <WrapItem>
              <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
            </WrapItem>
            <WrapItem>
              <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
            </WrapItem>
            <WrapItem>
              <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
            </WrapItem>
          </Wrap>

          <AvatarGroup my="15px" size='md' max={2} border="none">
            <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
            <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
            <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
            <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
            <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
          </AvatarGroup>

          <Box my='305px'>
            <Image
              borderRadius='full'
              boxSize='150px'
              src='https://bit.ly/dan-abramov'
              alt='Dan Abramov'
            />
          </Box>

          <Stack>
            <Skeleton height='20px' />
            <Skeleton height='20px' />
            <Skeleton height='20px' />
          </Stack>
          <div>Home view Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid eaque totam soluta ab illo earum beatae quos consequatur blanditiis animi vitae, nisi ipsum perferendis ipsa excepturi! Omnis porro corporis amet?</div>
        </Container>
      </LandingPageLayout>
    </div>
  )
}
