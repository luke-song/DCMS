import {
	FormControl,
	FormLabel,
	Input,
	HStack,
	Button,
	Box,
	Select,
    VStack,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import InputType from "./inputType";
import { Buffer } from 'buffer';
import { connect } from '@tableland/sdk';

window.Buffer = Buffer;

const initialValues = {
	parameter: "",
	type: "",
	value: "",
	pairs: [],
};

export default function Form() {
	const [values, setValues] = useState(initialValues);
	const [file, setFile] = useState();
	const handleChange = (e) => {
		const { name, value, files } = e.target;
		if (name !== "type") {
			setValues({
				...values,
				[name]: value,
			});
		} else {
			setValues({
				...values,
				[name]: value,
				value: "",
			});
		}
		if (values.type === "File") {
			if (files) setFile(files[0]);
		}
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		// setValues({
		// 	parameter: "",
		// 	value: "",
		// 	pairs: []
		// })
		axios
			.post("/upload", {
				file: file,
			})
			.then((res) => console.log(res))
			.catch((err) => console.log(err));
	};
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
							<option disabled value="">
								Select Type
							</option>
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
						<InputType
							values={values}
							handleChange={handleChange}
						/>
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
                    <VStack>
					<Button
						type="submit"
						title="Submit to Filecoin"
						background="#FF6467"
						size="md"
						color="white"
						boxShadow="0 4px 4px 0px #000"
						my={5}
						isDisabled={!values.parameter || !values.value}
					>
						UPLOAD
					</Button>
                    <Button
						type="submit"
						title="Save to Tableland"
						background="#FF6467"
						size="md"
						color="white"
						boxShadow="0 4px 4px 0px #000"
						my={5}
						isDisabled={!values.parameter || !values.value}
                        onClick={ConnectTableland().connect}
					>
						Save on chain 
					</Button>
                    </VStack>
				</Box>
			</form>
		</div>
	);
}

function ConnectTableland() {
    const [subscribe, setSubscribe] = useState();
    return {
      subscribe,
      async connect() {
        const tableland = await connect({
          network: 'testnet',
          chain: 'polygon-mumbai',
        });
  
        await tableland.siwe();
        setSubscribe(tableland.subscribe);
  
        const { name } = await tableland.create(
          `id integer primary key, name text`, // Table schema definition
          {
            prefix: `my_sdk_table`, // Optional `prefix` used to define a human-readable string
          }
        );
  
        console.log(name);
  
        const writeRes = await tableland.write(
          `INSERT INTO ${name} (id, name) VALUES (0, 'Bobby Tables');`
        );
  
        console.log(writeRes);
  
        const readRes = await tableland.read(`SELECT * FROM ${name};`);
  
        console.log(readRes);
      },
    };
  }