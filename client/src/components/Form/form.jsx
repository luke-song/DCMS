import {
	FormControl,
	FormLabel,
	Input,
	HStack,
	Text,
	Button,
	Box
} from "@chakra-ui/react";
import React, { useState } from "react"

const initialValues = {
	key: "",
	value: "",
	pairs: []
}


export default function Form() {
	const [values, setValues] = useState(initialValues)
	const handleChange = e => {
		const { name, value } = e.target
		setValues({
			...values,
			[name]: value
		})
	}
	const handleSubmit = e => {
		e.preventDefault()
		const newPair = { key: values.key, value: values.value }
		setValues((prevState) => ({
			pairs: [...prevState.pairs, newPair],
			key: "",
			value: ""
		}))
	}
	const handleUpload = e => {
		e.preventDefault()
		setValues({
			key: "",
			value: "",
			pairs: []
		})
	}
	return (
		<div>
			<form action="/" onSubmit={handleSubmit}>
				<HStack>
					<FormControl isRequired>
						<FormLabel color="white" fontWeight="bold">
							Key:
						</FormLabel>
						<Input
							name="key"
							value={values.key}
							onChange={handleChange}
							sx={{ ":focus": { background: "white" } }}
							variant="filled"
							borderRadius={20}
						/>
					</FormControl>
					<Box pt={25}>
						<Text fontWeight="bold" fontSize="2xl" color="white">
							:
						</Text>
					</Box>
					<FormControl isRequired>
						<FormLabel color="white" fontWeight="bold">
							Value:
						</FormLabel>
						<Input
							name="value"
							value={values.value}
							onChange={handleChange}
							sx={{ ":focus": { background: "white" } }}
							variant="filled"
							borderRadius={20}
						/>
					</FormControl>
				</HStack>
				<ul>
					{values.pairs.map(pair => (
						<li key={pair.key}>{pair.key} : {pair.value}</li>
					))}
				</ul>
				<Button
					type="submit"
					title="Add a key-value pair"
					bg="#FF6467"
					color="white"
					ml={"90%"}
					boxShadow="0 4px 4px 0px #000"
					my={5}
					fontSize="lg"
				>
					+
				</Button>
			</form>
			<Box textAlign="center">
				<form action="/" onSubmit={handleUpload}>
					<Button
						type="submit"
						title="Submit to Filecoin"
						background="#FF6467"
						size="md"
						color="white"
						boxShadow="0 4px 4px 0px #000"
						m="auto"
					>
						UPLOAD
					</Button>
				</form>
			</Box>
		</div>


	);
}
