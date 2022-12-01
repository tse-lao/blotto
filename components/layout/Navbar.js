import { SunIcon,  MoonIcon} from "@chakra-ui/icons";
import { Flex, Button, Text, Box, useColorMode } from "@chakra-ui/react"
import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <>
      <Flex mt='6' justifyItems="center" alignItems='center' gap='6'>
        <Flex w="500px" gap='12'>
          <Button variant='teal'> Play</Button>
          <Button variant='link'> How it works?</Button>
          <Button variant='link'> Results</Button>
        </Flex>
        <Box flex='1'>
          <ConnectButton />
        </Box>
        <Box>
          <Button onClick={toggleColorMode}>
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </Button>
        </Box>

      </Flex>
    </>
  )
}