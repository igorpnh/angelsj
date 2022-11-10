import { Link, Text, Flex, Container, Image } from "@chakra-ui/react";
import { useRouter } from 'next/dist/client/router'

const Navbar = () => {
    const router = useRouter()

    const breakpoints = {
        sm: '30em',
        md: '48em',
        lg: '62em',
        xl: '80em',
        '2xl': '96em',
    }
    const fonts = {
        fonts: {
            navbar: `'Dosis', sans-serif`
          },
    }

    const links = [
        {
            name: 'Início',
            href: '#'
        },
        {
            name: 'Peças',
            href: '#pecas'
        },
        {
            name: 'Contatos',
            href: '#contatos'
        }
    ]

    return (
        <>
            <Container 
            
            maxW='container.xl'
            >
                <Flex
                    paddingTop='1rem'
                    justify='space-around'
                    alignItems='center'
                >
                    <Image
                        src='https://thumbs2.imgbox.com/f5/e4/XV8Lbdsk_t.png'
                        boxShadow='rgba(0, 0, 0, 0.16) 0px 2px 6px'
                        borderRadius='full'
                    />
                    <Flex
                        gap='3rem'
                    >
                        {links.map(({ name, href }) => (
                            <Link
                                key={name}
                                href={href}
                                _hover={{ textDecoration: 'none' }}
                            >
                                <Text
                                fontSize='lg'
                                fontFamily={fonts.navbar}
                                    _hover={{ color: 'pink.500' }}
                                >
                                    {name}
                                </Text>
                            </Link>
                        ))}
                    </Flex>
                </Flex>
            </Container>
        </>

    )
}

export default Navbar;