<<<<<<< HEAD
import { Box, Heading, Container, VStack, Stack } from "@chakra-ui/react";
import Form from "../Form/EmailForm";
=======
import { Box, Heading, Container, VStack, Stack, Flex,Spacer } from "@chakra-ui/react";
import Form from "../Form/email_form";
>>>>>>> 99b6092ca158989447cc79b4ce0fda5f561ad1b3

export default function Contact() {
	return (
		<Box>
			<Container mt={50} maxW="90%" display="flex">
            <Flex direction="row" w={"95%"} >
					<VStack align="flex-start">
						<Heading color="#FF6467" size="2xl">
							Contact us.
						</Heading>
						<Heading size="lg">
							Let me know if there is any question.
						</Heading>
						<br />
						<Heading size="lg">
							We will get back to you as soon as possible.
						</Heading>
					</VStack>
<<<<<<< HEAD
					<VStack w={650} bg="#464549" borderRadius={20} p={20}>
=======
                    <Spacer/>
                    <VStack w={{ md: '55%' }} justify="center" spacing={3} bg="#464549" borderRadius={20} p={20}>
>>>>>>> 99b6092ca158989447cc79b4ce0fda5f561ad1b3
						<Heading color="#FF6467" size="md">
							What's your question?
						</Heading>
						<Form />
					</VStack>
                </Flex>
			</Container>
		</Box>
	);
}
