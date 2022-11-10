import { Box, Container, Flex, Text, Link, useMediaQuery } from '@chakra-ui/react';
import AvatarEffect from '../AvatarEffect';


const Header = () => {
    const [isLargerThan1000] = useMediaQuery('(min-width: 1000px)')
    const [isSmallerThan800] = useMediaQuery('(max-width: 800px)')

    const fonts = {
        fonts: {
            body: `'Dosis', sans-serif`
        },
    }

    return (
        <>
            <Container
                marginTop='3rem'
                maxW='container.xl'

            >
                <Flex
                    alignItems='center'
                    flexDirection={isLargerThan1000 ? 'row' : 'column'}
                    gap={isLargerThan1000 ? '0' : '4rem'}
                    justify='space-evenly'
                    textAlign='center'
                >
                    <Box w='50%'>
                        <Text
                            fontFamily={fonts.body}
                            fontSize={isSmallerThan800 ? '2xl' : '3xl'}
                        >
                            Oi, sejam bem-vindas(os)!
                        </Text>
                        <Text fontSize={isSmallerThan800 ? 'md' : 'lg'}> Meu nome é Angel e sou criadora dessa loja 💅🏽 </Text>
                        <Text fontSize={isSmallerThan800 ? 'md' : 'lg'}>Peças com 1 ano de garantia sendo atualizadas todo mês</Text>
                        <Text fontSize={isSmallerThan800 ? 'md' : 'lg'}>
                            Se quiser saber mais,
                            <Link
                                target='_blank'
                                href='https://api.whatsapp.com/send?phone=5514996408058'
                                _hover={{ textDecoration: 'none', color: 'pink.500' }}
                            >
                                📲 (14)99640-8058
                            </Link>
                        </Text>
                    </Box>
                    <AvatarEffect/>
                </Flex>
            </Container>
        </>


    )
}

export default Header;

