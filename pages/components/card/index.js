import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    SimpleGrid,
    transition,
  } from '@chakra-ui/react';

const Card = () => {
    
    const CARDS = [
        {
            name: 'Tornozeleira',
            description: 'Tornozeleira em Prata 921',
            price: 'R$300',
            img: 'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'
        },
        {
            name: 'Teste',
            description: 'Descrição teste',
            price: 'R$300',
            img: 'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'
        },
        {
            name: 'Teste',
            description: 'Descrição teste',
            price: 'R$300',
            img: 'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'
        },
        {
            name: 'Teste',
            description: 'Descrição teste',
            price: 'R$300',
            img: 'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'
        },
        {
            name: 'Teste',
            description: 'Descrição teste',
            price: 'R$300',
            img: 'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'
        },
        {
            name: 'Teste',
            description: 'Descrição teste',
            price: 'R$300',
            img: 'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'
        }
    ]

    return (
        <SimpleGrid 
        marginTop='3rem' 
        p={'3rem'} 
        placeItems='center' 
        columns={{sm: 1, md: 2, lg: 4}} 
        spacing={8}
        id='pecas'
        >
            {CARDS.map((cardItem)=>(
      <Box
        key={cardItem.img}
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        zIndex={1}>
        <Box
          rounded={'lg'}
          height={'230px'}>
          <Image
            rounded={'lg'}
            height={'100%'}
            width={282}
            objectFit={'cover'}
            src={cardItem.img}
            _hover={{
                transform:'scale(1.05)',
                transition: '0.5s ease-out'

            }}
            
          />
        </Box>
        <Stack pt={10} align={'center'}>
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
            {cardItem.name}
          </Heading>
          <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
            {cardItem.description}
          </Text>
          <Stack direction={'row'} align={'center'}>
            <Text fontWeight={800} fontSize={'xl'}>
              $57
            </Text>
            {/*SE TIVER EM PROMOÇÃO, ATIVAR */}
            {/* <Text textDecoration={'line-through'} color={'gray.600'}>
              $199
            </Text> */}
          </Stack>
        </Stack>
      </Box>
            ))}
    </SimpleGrid>
    )
}

export default Card