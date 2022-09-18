import {
	FormControl,
	FormLabel,
	Input,
	HStack,
	Text,
	Button,
} from "@chakra-ui/react";

export default function form() {
	return (
		<FormControl textAlign="center">
			<HStack>
				<div>
					<FormLabel color="white" fontWeight="bold">
						Key:
					</FormLabel>
					<Input type="email" variant="filled" borderRadius={20} />
				</div>
				<Text fontWeight="bold" fontSize="2xl" mt={50} color="white">
					:
				</Text>
				<div>
					<FormLabel color="white" fontWeight="bold">
						Value:
					</FormLabel>
					<Input type="email" variant="filled" borderRadius={20} />
				</div>
			</HStack>
			<Button
				bg="#FF6467"
				color="white"
				ml={"90%"}
				boxShadow="0 4px 4px 0px #000"
				my={5}
				fontSize="lg"
			>
				+
			</Button>
			<Button
				background="#FF6467"
				size="md"
				color="white"
				boxShadow="0 4px 4px 0px #000"
				m="auto"
			>
				SUBMIT
			</Button>
		</FormControl>
	);
}
