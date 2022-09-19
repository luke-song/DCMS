import { Box, Heading, Container, VStack, Stack } from "@chakra-ui/react";

export default function Who() {
	return (
		<Box>
			<Container mt={50} maxW="90%" display="flex">
				<Stack direction={["column", "row"]} spacing={1}>
					<VStack align="flex-start">
						<Heading color="#FF6467" size="2xl">
							Who we are.
						</Heading>
						<Heading size="lg">
							explain who we are.
						</Heading>
					</VStack>
				</Stack>
			</Container>
		</Box>
	);
}
