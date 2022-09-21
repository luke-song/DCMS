import { Box, Heading, Container, VStack, Flex, Spacer } from "@chakra-ui/react";
import Form from "../Form/emailForm";

export default function Contact() {
	return (
		<Box>
			<Container mt={50} maxW="90%" display="flex">
				<Flex direction="row" w={"95%"} >
					<Spacer />
					<VStack align="flex-start">
						<Heading color="#FF6467" size="2xl">
							Contact us.
						</Heading>
						<Heading>
							Let us know if you have any questions.
						</Heading>
						<br />
						<Heading>
							We will get back to you as soon as possible.
						</Heading>
					</VStack>
					<Spacer />
					<VStack w={{ md: '55%' }} justify="center" spacing={3} bg="#464549" borderRadius={20} py={20} px={10} maxW="460">
						<Heading color="#FF6467" size="lg" paddingBottom={5}>
							What's your question?
						</Heading>
						<Form />
					</VStack>
					<Spacer />
				</Flex>
			</Container>
		</Box>
	);
}
