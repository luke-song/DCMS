import {
	FormControl,
	FormLabel,
	Input,
	HStack,
	Button,
	Box,
	Select
} from "@chakra-ui/react";
import React, { useState } from "react"
import InputType from "./inputType";

const initialValues = {
	parameter: "",
	type: "",
	value: null,
	pairs: []
}


export default function Form() {
	const [values, setValues] = useState(initialValues)
	const handleChange = e => {
		const { name, value } = e.target
		if (name != "type") {
			setValues({
				...values,
				[name]: value
			})
		}
		else {
			setValues({
				...values,
				[name]: value,
				value: null
			})
		}
	}
	const handleSubmit = e => {
		e.preventDefault()
		const newPair = { parameter: values.parameter, value: values.value }
		setValues((prevState) => ({
			pairs: [...prevState.pairs, newPair],
			parameter: "",
			value: ""
		}))
	}
	const handleUpload = e => {
		e.preventDefault()
		setValues({
			parameter: "",
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
							Parameter:
						</FormLabel>
						<Input
							name="parameter"
							value={values.parameter}
							onChange={handleChange}
							sx={{ ":focus": { background: "white" } }}
							variant="filled"

						/>
					</FormControl>
					<FormControl isRequired>
						<FormLabel color="white" fontWeight="bold">
							Type:
						</FormLabel>
						<Select
							name="type"
							value={values.type}
							onChange={handleChange}
							sx={{ ":focus": { background: "white" } }}
							variant="filled"
						>
							<option selected disabled value="">Select Type</option>
							<option value="text">String</option>
							<option value="number">Number</option>
							{/* <option value="array">Array</option>
							<option value="map">Map</option>
							<option value="sset">Set</option> */}
							<option value="file">File</option>
						</Select>
					</FormControl>
					<FormControl isRequired>
						<FormLabel color="white" fontWeight="bold">
							Value:
						</FormLabel>
						<InputType values={values} handleChange={handleChange} />
					</FormControl>
				</HStack>
				<ul>
					{values.pairs.map(pair => (
						<li parameter={pair.parameter}>{pair.parameter} : {pair.value}</li>
					))}
				</ul>
				<Button
					type="submit"
					title="Add a parameter-value pair"
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
