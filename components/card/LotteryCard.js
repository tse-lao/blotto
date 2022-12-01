import {Card, Stack, Text, Heading, Divider, Button, CardBody, ButtonGroup, CardFooter, Image} from "@chakra-ui/react"
export default function LotteryCard(){
    return (
        <>
            <Card maxW='sm'>
                <CardBody>
                    <Image
                        src='https://i.seadn.io/gae/yDTWM_7cxf7gkuSsZDfbbDIcDLHMAzEhZUl7BmtG4bflNgdq1q0e8U0P0IcIC1Ib87hRpEaM5OND4TS-pL3-8UbInSKO2B03QQdDdA?auto=format&w=2048'
                        alt='PolyPunks on opensea.'
                        borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>First Lottery Ticket</Heading>
                        <Text>
                            This will be our first lottery ticket on the Polygon Chain. 
                            Every account is able to acquire as many tickets as they want. As soon as all the tickets are sold out.
                            The lottery will automatically draw a winner and distribute the price. 
                        </Text>
                        <Text color='green.600' fontSize='2xl' alignSelf="center">
                            50 MATIC
                        </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter alignSelf="center">
                    <ButtonGroup spacing='2'>
                        <Button variant='solid' colorScheme='green'>
                            Buy Ticket
                        </Button>
                    </ButtonGroup>
                </CardFooter>
            </Card>
        </>
    )
}