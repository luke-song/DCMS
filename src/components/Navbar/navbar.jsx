import React from 'react'
import { Box, Link, HStack, Image, Flex, Spacer, Heading, Text, Button } from '@chakra-ui/react'
import { Link as ReactLink } from 'react-router-dom'
import Logo from "../../assets/Logo.png";
import "./navbar.css";
import { useMoralis } from "react-moralis"

export default function Navbar() {
    const {
        authenticate,
        isAuthenticated,
        logout,
    } = useMoralis()
    return (
        <Flex bg='#464549' pl='10' pr='10' >
            <HStack>
                <Box p='2'>
                    <Link as={ReactLink} to='/'>
                        <Flex>
                            <Image src={Logo} alt="Logo" />
                            <Heading pt='3' size='xl' color='#FF6467'> CMS </Heading>
                        </Flex>
                    </Link>
                </Box>
            </HStack>
            <Spacer />
            <HStack>
                <Box p='2'>
                    <Link as={ReactLink} to='/'>
                        <Text pt='1' size='sm' color='#FF6467' className={'hover'}> How it works </Text>
                    </Link>
                </Box>
                <Box p='2'>
                    <Link as={ReactLink} to='/who'>
                        <Text pt='1' size='sm' color='#FF6467' className={'hover'}> • Who we are </Text>
                    </Link>
                </Box>
                <Box p='2'>
                    <Link as={ReactLink} to='/what'>
                        <Text pt='1' size='sm' color='#FF6467' className={'hover'}> • What we do </Text>
                    </Link>
                </Box>
                <Box p='2'>
                    <Link as={ReactLink} to='/contact'>
                        <Text pt='1' size='sm' color='#FF6467' className={'hover'}> • Contact us </Text>
                    </Link>
                </Box>
            </HStack>
            <Spacer />
            <HStack>
                {!isAuthenticated
                    ? <Button
                        background="#FF6467"
                        size="md"
                        color="white"
                        m="auto"
                        onClick={() => authenticate()}
                    >
                        Connect
                    </Button>
                    : <Button
                        background="#FF6467"
                        size="md"
                        color="white"
                        m="auto"
                        onClick={() => logout()}
                    >
                        Disconnect
                    </Button>
                }
            </HStack>
        </Flex >
    )
}