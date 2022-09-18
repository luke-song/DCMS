import { Box, Heading, Container, VStack, Stack } from "@chakra-ui/react";
import Form from "../Form/form";

export default function upload() {
	return (
		<Box>
			<Container mt={50} maxW="90%" display="flex">
				<Stack direction={["column", "row"]} spacing={1}>
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
					<VStack w={650} bg="#464549" borderRadius={20} p={20}>
						<Heading color="#FF6467" size="md">
							Upload Your Content
						</Heading>
						<Form />
					</VStack>
				</Stack>
			</Container>
		</Box>
	);
}
