import { Box, Button, Center, Container, Flex, Icon, Image, Input, List, ListIcon, ListItem, Menu, MenuItem, MenuList, Show, Spacer, Text, useDisclosure, VStack, Wrap, WrapItem } from '@chakra-ui/react'
import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from '@chakra-ui/react'
import { Link } from '@inertiajs/inertia-react'
import { FiAlignCenter } from "react-icons/fi";

export default function MobileSideMenu() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()


    return (
        <>
            <Box ref={btnRef} colorScheme='tomato' color='blue.900' onClick={onOpen}>
                <Icon as={FiAlignCenter} fontSize='3xl' cursor='pointer' />
            </Box>

            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent bg="white" shadow='2xl'>
                    <DrawerCloseButton color='gray.700' />
                    <DrawerHeader color='gray.700'>
                        <Box>
                            <Image width='150px' src='https://res.cloudinary.com/webexe/image/upload/v1646330981/prodiary-removebg-preview_fomjrd.png' alt='Dan Abramov' />
                        </Box>
                    </DrawerHeader>

                    <DrawerBody>
                        <Input color='gray.100' placeholder='Type here...' />

                        <List spacing={3} mt='20px'>
                            <Link href='/' bg="tomato">
                                <ListItem _hover={{
                                    color: 'white'
                                }} py='10px' px='15px' color='gray.800' rounded='md' className=' hover:bg-red-500'>
                                    {/* <Box px='15px' py='10px' width='full' borderRadius='5px' className=' hover:bg-red-500'> */}
                                    Home
                                    {/* </Box> */}
                                </ListItem>
                            </Link>

                            <Link href='/about'>
                                <ListItem _hover={{
                                    color: 'white'
                                }} py='10px' px='15px' color='gray.800' rounded='md' className=' hover:bg-red-500'>
                                    {/* <Box px='15px' py='10px' width='full' borderRadius='5px' className=' hover:bg-red-500'> */}
                                    About
                                    {/* </Box> */}
                                </ListItem>
                            </Link>
                            <Link href='/upload'>
                                <ListItem _hover={{
                                    color: 'white'
                                }} py='10px' px='15px' color='gray.800' rounded='md' className=' hover:bg-red-500'>
                                    {/* <Box px='15px' py='10px' width='full' borderRadius='5px' className=' hover:bg-red-500'> */}
                                    Upload file
                                    {/* </Box> */}
                                </ListItem>
                            </Link>
                        </List>


                    </DrawerBody>

                    <DrawerFooter>
                        {/* <Button variant='outline' mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button colorScheme='blue'>Save</Button> */}
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}
