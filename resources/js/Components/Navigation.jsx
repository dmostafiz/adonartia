import { Box, Button, Center, Container, Flex, Icon, Image, Input, Show, Spacer, Text, useDisclosure, useMediaQuery, Wrap, WrapItem } from '@chakra-ui/react'
import { Link } from '@inertiajs/inertia-react'
import React from 'react'
import { FiLogIn } from 'react-icons/fi'
import MobileSideMenu from './MobileSideMenu'


export default function Navigation() {

    const [isMobileScreen] = useMediaQuery('(max-width:768px)')

    return (
        <Box zIndex={999} py='15px' className="backdrop-blur-xl bg-white sticky top-0" shadow='md' dropShadow='md'>
            <Container maxW='container.xl'>
                {/* <div className='w-full flex '> */}
                <Flex>

                    <Show below='lg'>
                        <MobileSideMenu />
                        <Spacer />
                    </Show>


                    <Box>
                        <Link href='/'>
                            <Image width={isMobileScreen ? '120px' : '180px'} src='https://res.cloudinary.com/webexe/image/upload/v1646330981/prodiary-removebg-preview_fomjrd.png' alt='Dan Abramov' />
                        </Link>
                    </Box>


                    <Spacer />

                    <Show above='lg'>
                        <Center>
                            <ul className='flex items-center gap-4'>
                                <li><Link href='/'><Box px='15px' py='10px' fontWeight='semibold' borderRadius='5px' className='hover:bg-red-500 hover:text-gray-50' color='gray.700'>HOME</Box></Link></li>
                                <li><Link href='/about'><Box px='15px' py='10px' fontWeight='semibold' borderRadius='5px' className='hover:bg-red-500 hover:text-gray-50' color='gray.700'>ABOUT</Box></Link></li>
                                <li><Link href='/upload'><Box px='15px' py='10px' fontWeight='semibold' borderRadius='5px' className='hover:bg-red-500 hover:text-gray-50' color='gray.700'>UPLOAD FILE</Box></Link></li>
                                <li><Link href='/upload'>
                                    <Flex alignItems='center' gap='8px' px='15px' py='10px' fontWeight='normal' borderRadius='5px' className='bg-[#393939] text-gray-50' color='gray.50'>
                                       <Icon fontWeight='bold' as={FiLogIn}/> LOG-IN
                                    </Flex>
                                </Link>
                                </li>
                            </ul>
                        </Center>
                    </Show>

                    <Show below='lg'>
                        <Link href='/upload'>
                            <Box px='15px' py='10px' fontWeight='semibold' borderRadius='5px' className='text-gray-700' color='gray.700'>LOG-IN</Box>
                        </Link>
                    </Show>

                </Flex>
                {/* </div> */}
            </Container>
        </Box>
    )
}
