import React, { useRef } from 'react';
import { Box, Heading, Container, VStack, Flex, Spacer } from "@chakra-ui/react";
import Form from "../Form/emailForm";

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
					<Spacer />
					<VStack w={{ md: '55%' }} justify="center" spacing={3} bg="#464549" borderRadius={20} p={20}>
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
