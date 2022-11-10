import { Container, Flex, Image, Text, Box, useMediaQuery, Link, Center, Divider } from "@chakra-ui/react"


export const Header = () => {
    const [isLargerThan1000] = useMediaQuery('(min-width: 1000px)')
    const [isLargerThan600] = useMediaQuery('(min-width: 600px)')
    return (
        <Container
            bg='rgba(255,255,255)'
            maxW='1440px'
            padding='4rem 0'
            height='100%'

        >
            <Flex
                justifyContent='space-around'
                flexDirection={isLargerThan1000 ? 'row' : 'column'}
                alignItems='center'
                height='100%'
                gap={isLargerThan1000 ? 'none' : '4rem'}
            >
                <Box>
                    <Flex
                        flexDirection='column'
                        alignItems='center'
                        textAlign='center'
                        color='#000'
                    >
                        <Text fontSize='3xl'> Oi, sejam bem-vindas(os)! </Text>
                        <Text fontSize='xl'> Meu nome é Angel e sou criadora dessa loja 💅🏽 </Text>
                        <Text fontSize='xl'>Peças com 1 ano de garantia sendo atualizadas todo mês</Text>
                        <Text
                            fontSize='xl'
                        >
                            Se quiser saber mais,
                            <Link
                                target='_blank'
                                href='https://api.whatsapp.com/send?phone=5514996408058'
                                _hover={{ textDecoration: 'none', color: '#a77390' }}
                            >
                                📲 (14)99640-8058
                            </Link>
                        </Text>
                    </Flex>
                </Box>
                <Center height='15rem'>
                    <Divider color='black' orientation='vertical' bg='black' />
                </Center>
                <Image
                    boxShadow='rgba(0, 0, 0, 0.2) 0px 2px 6px'
                    borderRadius='full'
                    boxSize='25rem'
                    src='https://thumbs2.imgbox.com/bc/ac/XPNGwrTp_t.jpg'
                />

            </Flex>
        </Container>
    )
}

