import React from 'react'
import { Box, Link, HStack, Image, Flex, Spacer, Heading, Text, Button } from '@chakra-ui/react'
import { Link as ReactLink } from 'react-router-dom'
import Logo from "../../assets/Logo.png";

export default function navbar () {
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
                    <Text pt='1' size='sm' color='#FFFFFF'> How it works </Text> 
                </Box>
                <Box p='2'>
                    <Text pt='1' size='sm' color='#FF6467'> • Who we are </Text> 
                </Box>
                <Box p='2'>
                    <Text pt='1' size='sm' color='#FF6467'> • What we do </Text> 
                </Box>
                <Box p='2'>
                    <Text pt='1' size='sm' color='#FF6467'> • Contact us </Text> 
                </Box>
                </HStack>
                <Spacer />
                <HStack>
                <Box bg='#FF6467' borderRadius='lg' w="100px" h="35px" pt="1" align="center"> 
                <Button color="#FFFFFF"variant='link'> Connect </Button>
                </Box>
                {/* chakra ui don't support custom colored button :( */}
                </HStack>
        </Flex>
  )
}