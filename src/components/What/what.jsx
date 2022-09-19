import { Box, Heading, Container, VStack, Stack } from "@chakra-ui/react";

export default function What() {
	return (
		<Box>
			<Container mt={50} maxW="90%" display="flex">
				<Stack direction={["column", "row"]} spacing={1}>
					<VStack align="flex-start">
						<Heading color="#FF6467" size="2xl">
							What we do.
						</Heading>
						<Heading size="lg">
							explain what we do.
						</Heading>
					</VStack>
				</Stack>
			</Container>
		</Box>
	);
}
