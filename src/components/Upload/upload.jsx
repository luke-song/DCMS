<<<<<<< HEAD
import { Box, Heading, Container, VStack, Stack } from "@chakra-ui/react";
import Form from "../Form/Form";
=======
import { Box, Heading, Container, VStack, Stack, Flex, Spacer } from "@chakra-ui/react";
import Form from "../Form/form";
>>>>>>> 99b6092ca158989447cc79b4ce0fda5f561ad1b3

export default function Upload() {
	return (
		<Box>
			<Container mt={50} maxW="90%" display="flex">
            <Flex direction="row" w={"95%"} >
					<VStack align="flex-start">
						<Heading color="#FF6467" size="2xl">
							Welcome, User
						</Heading>
						<Heading size="lg">
							Imagine a place where your contents do not
							ever&nbsp;
							<span style={{ color: "#FF6467" }}>disappear.</span>
						</Heading>
						<br />
						<Heading size="lg">
							On cms, it will be stored on{" "}
							<span style={{ color: "#FF6467" }}>
								block-chain.
							</span>
						</Heading>
					</VStack>
                    
                    <Spacer/>
                    
					<VStack w={{ md: '55%' }} justify="center" spacing={3} bg="#464549" borderRadius={20} p={20}>
						<Heading color="#FF6467" size="md">
							Upload Your Content
						</Heading>
                        <Box alignItems={"center"}>
						<Form />
                        </Box>
					</VStack>
				</Flex>
			</Container>
		</Box>
	);
}
