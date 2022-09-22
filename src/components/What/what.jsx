import { Box, Heading, Container, VStack, Stack, Text } from "@chakra-ui/react";

export default function What() {
	return (
		<Box>
			<Container mt={50} maxW="90%" display="flex">
				<Stack direction={["column", "row"]} spacing={1}>
					<VStack align="flex-start">
						<Heading color="#FF6467" size="2xl">
							What we do.
						</Heading>
						<Heading size="lg" w={"50%"}>
							<Text my={25}>We are researchers in the block chain space who are eager to contribute to the development of Web3. We frequently want to refer to material from years ago that we may not be able to obtain since we continually access information from the web in our daily lives.</Text>
							<Text my={25}>A Content Management System that is based on the block chain was created as the result of our team's desire to find a solution to data permanence. Our users can easily permanently store information on the chain and quickly retrieve it using a hash.</Text>
						</Heading>
					</VStack>
				</Stack>
			</Container>
		</Box>
	);
}
