import {
	Box,
	Heading,
	Container,
	VStack,
	Flex,
	Spacer,
    Text,
} from "@chakra-ui/react";
import Form from "../Form/form";
// import { useState, useEffect } from "react";
// import { ConnectTableland } from "../Form/form";

export default function Upload() {  
    // const [tablelandData, setTablelandData] = useState([{}]);

    // useEffect(() => {
    //         setTablelandData(ConnectTableland().connect.readRes);
    // }, [setTablelandData]);

	return (
		<Box>
			<Container mt={50} maxW="90%" display="flex">
				<Flex direction="row" w={"95%"}>
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

					<Spacer />

					<VStack
						w={{ md: "50%" }}
						justify="center"
						spacing={3}
						bg="#464549"
						borderRadius={20}
						p={10}
					>
						<Heading color="#FF6467" size="md">
							Upload Your Content
						</Heading>
						<Box alignItems={"center"}>
							<Form />
						</Box>
					</VStack>
				</Flex>
			</Container>
            
            {/* <Heading color="#000000" size="xl">		
                JSON data: {JSON.stringify(tablelandData)}
            </Heading> */}
		</Box>
	);
}
