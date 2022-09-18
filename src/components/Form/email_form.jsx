import {
	FormControl,
	FormLabel,
	Input,
	HStack,
	Text,
	Button,
    VStack,
} from "@chakra-ui/react";

export default function form() {
	return (
		<FormControl textAlign="center">
			<VStack align="left">
				<div>
					<FormLabel color="white" fontWeight="bold">
					    Name:
					</FormLabel>
					<Input
						sx={{ ":focus": { background: "white" } }}
						type="email"
						variant="filled"
						borderRadius={20}
					/>
				</div>
                <div>
					<FormLabel color="white" fontWeight="bold">
					    Email:
					</FormLabel>
					<Input
						sx={{ ":focus": { background: "white" } }}
						type="email"
						variant="filled"
						borderRadius={20}
					/>
				</div>
                <div>
					<FormLabel color="white" fontWeight="bold">
					    Message:
					</FormLabel>
					<Input
						sx={{ ":focus": { background: "white" } }}
						type="email"
						variant="filled"
						borderRadius={20}
					/>
				</div>
			
				
			</VStack>
			
			<Button
				background="#FF6467"
				size="md"
				color="white"
				boxShadow="0 4px 4px 0px #000"
				m="auto"
                mt={5}
			>
				SEND
			</Button>
		</FormControl>
	);
}
