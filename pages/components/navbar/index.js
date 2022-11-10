import {
    Link,
    Box,
    Center,
    Image,
    useMediaQuery,
    Container,
    Drawer,
    DrawerBody,
    Flex,
    DrawerOverlay,
    DrawerContent,
    IconButton,
    useDisclosure
} from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router'
import { isActiveLink } from '../../../lib/utils'

import { HamburgerIcon } from '@chakra-ui/icons';




export const Navbar = () => {

    const links = [
        {
            name: 'Início',
            href: '/',
        },
        {
            name: 'Peças',
            href: '/pecas',
        },
        {
            name: 'Contato',
            href: '/contato',
        },
    ]

    const [isLargerThan600] = useMediaQuery('(min-width: 600px)')
    const [isSmallerThan600] = useMediaQuery('(max-width: 600px)')
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>

            <Drawer
                onClose={onClose}
                isOpen={isOpen}
                size='xs'
            >
                <DrawerOverlay/>
                <DrawerContent
                className='content-drawer'
                >
                    <DrawerBody>
                        <Flex
                            alignItems='center'
                            flexDirection='column'
                            gap='3rem'
                            color='black'
                            paddingTop='3rem'
                            fontFamily= 'PT Sans Narrow'
                        >
                            <Link
                                
                                href="/"
                                _hover={{ textDecoration: 'none', color: '#cccc' }}
                            >
                                HOME</Link>

                            <Link
                                href="#sobre"
                                _hover={{ textDecoration: 'none', color: '#cccc' }}
                            >
                                PEÇAS</Link>

                            <Link
                                href="#contatos"
                                _hover={{ textDecoration: 'none', color: '#cccc' }}

                            >
                                CONTATOS</Link>
                        </Flex>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
            <Box
                width='100%'
                height='4rem'
                bg='#000'
                padding='0 1rem'
            >
                <Container
                    display='flex'
                    alignItems='center'
                    maxW='1440px'
                    justifyContent={isSmallerThan600 ? 'space-between' : 'space-between'}
                >
                    <Box>
                        <Image
                            borderRadius='full'
                            boxSize='4em'
                            marginInlineStart='10'
                            boxShadow='rgba(0, 0, 0, 0.16) 0px 2px 6px'
                            p='0.2rem'
                            src='https://thumbs2.imgbox.com/f5/e4/XV8Lbdsk_t.png'
                            alt='Logo'
                        />
                    </Box>

                    <IconButton 
                    aria-label='Menu'
                    display={isSmallerThan600 ? 'block' : 'none'} 
                    onClick={onOpen}
                    icon={<HamburgerIcon/>}
                    >
                
                        Open
                    </IconButton>
                    <Center
                        display={isLargerThan600 ? 'inherit' : 'none'}
                        paddingRight='2rem'
                        gap='3rem'
                        fontFamily='"Kanit", sans-serif'
                        fontSize='16'
                        // color='#D3BCCC'
                        color='#A167A5'
                    >
                        <Link
                            href="/"
                            _hover={{ textDecoration: 'none', color: '#D3BCCC' }}
                        >
                            Home</Link>

                        <Link
                            href="#sobre"
                            _hover={{ textDecoration: 'none', color: '#D3BCCC' }}
                        >
                            Peças</Link>

                        <Link
                            href="#contatos"
                            _hover={{ textDecoration: 'none', color: '#D3BCCC' }}

                        >
                            Contatos</Link>
                    </Center>
                </Container>
            </Box>
        </>
    )
}
