import {keyframes, Avatar, Box} from '@chakra-ui/react'


const AvatarEffect = () => {

    const pulseRing = keyframes`
	0% {
    transform: scale(0.30);
  }
  40%,
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
	`;

    return (
        <Box
            as="div"
            position="relative"
            w='16rem'
            h='16rem'
            _before={{
                content: "''",
                position: 'relative',
                display: 'block',
                width: '300%',
                height: '300%',
                boxSizing: 'border-box',
                marginLeft: '-100%',
                marginTop: '-100%',
                borderRadius: '50%',
                bgColor: 'pink.500',
                animation: `2.25s ${pulseRing} cubic-bezier(0.46, 0.03, 0.77, 0.75) -0.4s infinite`,
            }}>
            <Avatar
                src="https://thumbs2.imgbox.com/bc/ac/XPNGwrTp_t.jpg"
                size="full"
                position="absolute"
                top={0}
                right={0.5}
            />
        </Box>
    )
}

export default AvatarEffect;