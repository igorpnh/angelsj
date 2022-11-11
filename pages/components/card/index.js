import {
    Box,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    SimpleGrid,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
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
            name: 'Aliança',
            description: 'Aliança namoro',
            price: 'R$150',
            img: 'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'
        },
        {
            name: 'Anel',
            description: 'Anel Solitário',
            price: 'R$200',
            img: 'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'
        },

    ]

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <SimpleGrid
            marginTop='3rem'
            p={'3rem'}
            placeItems='center'
            columns={{ sm: 1, md: 2, lg: 4 }}
            spacing={8}
            id='pecas'
        >
            {CARDS.map((cardItem) => (
                <Box
                    key={cardItem.img}
                    role={'group'}
                    p={6}
                    maxW={'330px'}
                    w={'full'}
                    bg={useColorModeValue('white', 'purple.900')}
                    boxShadow={'2xl'}
                    rounded={'lg'}
                    zIndex={1}>
                    <Box
                        rounded={'lg'}
                        height={'230px'}>
                        <Image
                            onClick={onOpen}
                            rounded={'lg'}
                            height={'100%'}
                            width={282}
                            objectFit={'cover'}
                            src={cardItem.img}
                            _hover={{
                                transform: 'scale(1.05)',
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
                                {cardItem.price}
                            </Text>
                            {/*SE TIVER EM PROMOÇÃO, ATIVAR */}
                            {/* <Text textDecoration={'line-through'} color={'gray.600'}>
              $199
            </Text> */}
                        </Stack>
                    </Stack>
                    <ModalCard key={cardItem.name} onOpen={onOpen} isOpen={isOpen} onClose={onClose} {...cardItem}/>
                </Box>   
            ))}
        </SimpleGrid>

    )

}

export default Card

function ModalCard({ isOpen, onClose, name, description, price, img }) {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent bg={useColorModeValue('white', 'purple.900')}>
                <ModalHeader>{description}</ModalHeader>
                <ModalCloseButton onClick={onClose} />
                <ModalBody>
                </ModalBody>

                <ModalFooter>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

