/* This LandingPageBanner requires Tailwind CSS v2.0+ */
import React, { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { Box, Button, Center, Container, Flex, Heading, Image, Select, Text, useMediaQuery } from '@chakra-ui/react'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function LandingPageBanner() {

  const [isMobileScreen] = useMediaQuery('(max-width:768px)')
  return (
    <Box width='full' minHeight='600px' bg="#1A161F" >
      <Container maxW='container.xl' py='70px'>
        <Flex direction={isMobileScreen ? 'column' : 'row'} width='full' justify='space-between' alignItems='center'>
          <Box maxWidth={!isMobileScreen ? '50%' : '100%'} height='auto'>
            {/* <Image width='full' src='https://cdn.10minuteschool.com/home/hero.png'/> */}
            <Heading fontFamily='Robot, sans-serif' maxWidth={!isMobileScreen ? '500px' : '100%'} color='gray.100' mb="20px" fontSize='48px' lineHeight='65px' fontWeight='medium'>
              FIND PRO <span className='relative'>
                TALENTS
                <Image position='absolute' right='0px' src='https://10minuteschool.com/assets/icons/home-page/underline.png' />
              </span> <br /> <Text fontSize='30px' fontFamily='Kalam'>START YOUR PROJECT TODAY</Text></Heading>
            <Box >
              <Text color='gray.100' lineHeight='30px' fontSize='19px'>WELCOME TO THE BIGGEST COMMUNITY OF TALENT PROGRAMERS AND SOFTWARE DEVELOPERS WORLD WIDE</Text>
            </Box>

            <Box width='100%' p='10px' bg='#2B2533' mt='15px' rounded='lg' maxWidth={!isMobileScreen ? '76%' : '100%'}>
              <Flex justify='space-between'>
                <Select width='60%' focusBorderColor='none' height='57px' fontSize='18px' fontWeight='normal' placeholder='i want to' bg='white' _focusVisible={false}>
                  <option value='option2'>find a talent</option>
                  <option value='option1' style={{ padding: '5px' }}>be a talent</option>
                </Select>
                <Button height='57px' focusBorderColor='none' width='38%' color='white' bg='#27895D' _hover={{
                  background: '#F4B840'
                }} size='lg'>
                  GET START
                </Button>
              </Flex>
              <Flex>

              </Flex>
            </Box>

          </Box>


          <Box mt={isMobileScreen ? '20px' : '0px'}>
            <Image maxHeight='550px' src='https://cdn.10minuteschool.com/home/hero.png' />
          </Box>
        </Flex>


      </Container>
    </Box>
  )
}
