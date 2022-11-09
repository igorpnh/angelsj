import { Container, Flex, Image, Text, Box, useMediaQuery, Highlight } from "@chakra-ui/react"

export const Header = () => {
    const [isLargerThan1000] = useMediaQuery('(min-width: 1000px)')
    const [isLargerThan600] = useMediaQuery('(min-width: 600px)')
    return (
        <Container 
        bg='rgba(255,255,255,0.7)'
        maxW='1440px'
        padding='4rem 0'
        height='100%'
        >
            <Flex
                justifyContent='space-around'
                flexDirection={isLargerThan1000 ? 'row' : 'column'}
                alignItems='center'
                height='100%'
                gap='1rem'
            >
                <Box>
                    <Flex
                    flexDirection='column'
                    alignItems='center'
                    textAlign='center'
                    color='#03120E'
                    >
                    {/* <Text fontSize='4xl'>
                        Olá, sejam bem-vindos(as)
                     </Text>
                     <Text fontSize='2xl'>
                        <Highlight 
                        query='Angel SemiJoias' 
                        styles={{px: '2', py:'1', rounded:'full', bg:'red.100'}}>
                        Me chamo Angel e sou a criadora da Angel SemiJoias
                        </Highlight>
                        ,
                        <Text>
                            aqui você poderá ver as peças disponíveis para compra.
                            Nossas peças possuem certificados e garantia de 1 ano! 
                            <Text fontSize='sm'>
                            (Alteramos as peças mensalmente)
                            </Text>
                        </Text>
                     </Text> */}
                    </Flex>
                </Box>
            <Image
            boxShadow='rgba(0, 0, 0, 0.16) 0px 2px 6px'
            borderRadius='full'
            boxSize='20rem'
            border='1px solid #03120E'
            src='https://thumbs2.imgbox.com/1a/d2/hTWsrYEE_t.png'
            />

            </Flex>
        </Container>
    )
}   

