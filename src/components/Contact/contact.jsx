import { Box, Heading, Container, VStack, Stack } from "@chakra-ui/react";
import Form from "../Form/email_form";

export default function contact() {
	return (
		<Box>
			<Container mt={50} maxW="90%" display="flex">
				<Stack direction={["column", "row"]} spacing={1}>
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
                    <VStack w={650} bg="#464549" borderRadius={20} p={20}>
						<Heading color="#FF6467" size="md">
							What's your question?
						</Heading>
						<Form />
					</VStack>
				</Stack>
			</Container>
		</Box>
	);
}
