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
import { useRecoilValue, useRecoilState } from "recoil";
import { jsonState, isLoading, hashCode} from "../Atom/atom";
import { useEffect } from "react";



export default function Upload() {  
    
    const jsonData = useRecoilValue(jsonState);
    const [is_loading, setIsLoading] = useRecoilState(isLoading);
    const hash = useRecoilValue(hashCode);

    // change the state of isLoading to false when the json data is loaded
    useEffect(() => {
        setIsLoading(false);
    }, [jsonData, setIsLoading]) 

	return (
		<Box>
			<Container mt={50} maxW="90%" display="flex">
				<Flex direction="row" w={"95%"}>
					<VStack align="flex-start">
						<Heading color="#FF6467" size="2xl">
							Welcome to CMS
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
                            <Text color="#FF6467" size="sm">
                            Please wait for half a minute after clicking the upload button for the data to be uploaded to the blockchain.
                                </Text>
						</Box>
					</VStack>
				</Flex>
			</Container>
            <Box>
			<Container mt={50} maxW="90%" display="flex">
				<Flex direction="row" w={"95%"}>
					<VStack align="flex-start">
						<Heading size="lg" mt={20}>
                        To provide the service, we leveraged the power of{" "}
							<span style={{ color: "#FF6467" }}>tableland and filecoin.</span>
						</Heading>
						
					</VStack>

					<Spacer />

            <VStack
						w={{ md: "70%" }}
						justify="center"
						spacing={3}
						bg="#464549"
						borderRadius={20}
						p={10}
                        mt={20}
					>
						<Heading color="#FF6467" size="md">
							Your JSON data on chain
						</Heading>

						<Box alignItems={"center"}>
                                <Heading color="#FFFFFF" size="sm" hidden={is_loading}>
                                    Default : {JSON.stringify(jsonData)}
                                </Heading>
                                
                                <Heading color="#FFFFFF" size="sm" hidden={is_loading} mt={20}>
                                    Default : {JSON.stringify(hash)}
                                </Heading>
                                <Text color="#FF6467" size="sm">
                                    <a href="https://mumbai.polygonscan.com/">Go to Polygon Scan to see your data on chain [click]</a>
                                </Text>
						</Box>
                        
					</VStack>
                    </Flex>
			</Container>
            </Box>
		</Box>
	);
}

// {!isAuthenticated
//     ? <Button
//         background="#FF6467"
//         size="md"
//         color="white"
//         m="auto"
//         onClick={() => authenticate()}
//     >
//         Connect
//     </Button>
//     : <Button
//         background="#FF6467"
//         size="md"
//         color="white"
//         m="auto"
//         onClick={() => logout()}
//     >
//         Disconnect
//     </Button>
// }