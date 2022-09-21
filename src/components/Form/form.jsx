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
	value: "",
	pairs: []
}


export default function Form() {
	const [values, setValues] = useState(initialValues)
	const [file, setFile] = useState()
	const handleChange = e => {
		const { name, value, files } = e.target
		if (name != "type") {
			setValues({
				...values,
				[name]: value
			})
		} else {
			setValues({
				...values,
				[name]: value,
				value: ""
			})
		}
		if (values.type == "File") {
			setFile(files[0])
		}
	}
	const handleSubmit = e => {
		e.preventDefault()
		console.log(values)
		console.log(file)
		// setValues({
		// 	parameter: "",
		// 	value: "",
		// 	pairs: []
		// })
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
							<option value="String">String</option>
							<option value="Number">Number</option>
							{/* <option value="array">Array</option>
							<option value="map">Map</option>
							<option value="sset">Set</option> */}
							<option value="File">File</option>
						</Select>
					</FormControl>
					<FormControl isRequired>
						<FormLabel color="white" fontWeight="bold">
							Value:
						</FormLabel>
						<InputType values={values} handleChange={handleChange} />
					</FormControl>
				</HStack>
				{/* <ul>
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
				</Button> */}
				<Box textAlign="center">
					<Button
						type="submit"
						title="Submit to Filecoin"
						background="#FF6467"
						size="md"
						color="white"
						boxShadow="0 4px 4px 0px #000"
						my={5}
					>
						UPLOAD
					</Button>
				</Box>
			</form>
		</div >


	);
}
