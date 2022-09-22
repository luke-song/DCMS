import { useState, useEffect } from 'react';
import { connect } from '@tableland/sdk';
import CMSInput from '../CMSInput';
import CMSButton from '../CMSButton';
import { v4 as uuidv4 } from 'uuid';
import { Buffer } from 'buffer';
import { useQuery } from '@tanstack/react-query';
import { useMoralis } from 'react-moralis';
import axios from 'axios';
import { Text, Flex, HStack, VStack, Box } from '@chakra-ui/react';
window.Buffer = Buffer;

/**
 *  An object with form data.
 * eg.
 *
 * project_data: [
 * 	{ parameter: 'name', type: 'String', value: 'John Doe' },
 * 	{ parameter: 'user_avatar', type: 'File', value: 'file_url' },
 * ],
 * user_id: 'polygon_mumbai_address','
 */

const PropertyType = Object.freeze({ STRING: 'STRING', FILE: 'FILE' });

function FormValueSelector({ propertyData, handleChange, onDelete }) {
	const {
		name = '',
		type = PropertyType.STRING,
		value = '',
	} = propertyData || {};
	const [propertyType, setPropertyType] = useState(type);

	const onChange = (e) => {
		const { name, value, files } = e.target;
		handleChange({ ...propertyData, [name]: files ? files[0] : value });
	};

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'row',
				width: '100%',
				gap: '.5rem',
				margin: "5px"
			}}
		>
			<CMSInput
				type='text'
				name='name'
				placeholder='property_name'
				onChange={onChange}
				defaultValue={name}
			/>
			<select
				name='type'
				onChange={(e) => {
					setPropertyType(e.target.value);
					onChange(e);
				}}
				defaultValue={type}
				style={{
					backgroundColor: '#FF6447',
					borderRadius: '8px',
					border: 'none',
					color: 'white',
					padding: '5px',
					fontWeight: '600',
					fontSize: '1rem',
					boxShadow: '0px 3px 4px gray',
				}}
			>
				<option value={PropertyType.STRING}>String</option>
				<option value={PropertyType.FILE}>Image / File</option>
			</select>
			{propertyType === PropertyType.STRING && (
				<CMSInput
					onChange={onChange}
					name='value'
					type='text'
					placeholder='property_value'
					defaultValue={value}
				/>
			)}
			{propertyType === PropertyType.FILE && (
				<CMSInput type='file' name='value' onChange={onChange} />
			)}
			<CMSButton
				style={{
					backgroundColor: '#FF6447',
					borderRadius: '8px',
					border: 'none',
					color: 'white',
					padding: '10px',
					fontWeight: '600',
					fontSize: '1rem',
				}}
				onClick={onDelete}
			>
				Delete
			</CMSButton>
		</div>
	);
}

async function getUserProjects(
	wallet_address = '0x0000000000000000000000000000000000000000'
) {
	const tableland = await connect({
		network: 'testnet',
		chain: 'polygon-mumbai',
	});
	const res = await tableland.read(
		`SELECT * FROM cms_table_80001_2622 WHERE user_id == "${wallet_address}";`
	);
	return res.rows;
}

export default function Form() {
	const { Moralis, isInitialized } = useMoralis();
	const [formState, setFormState] = useState([]);
	const [user, setUser] = useState(null);
	const [error, setError] = useState(false);
	const { data, isLoading, status } = useQuery(['project_count'], () =>
		getUserProjects(user?.get('ethAddress'))
	);

	useEffect(() => {
		if (isInitialized) setUser(Moralis.User.current());
	}, [isInitialized, Moralis.User]);

	return (
		<Flex>
			<VStack>
				<Box>
					{formState.map((propertyData, index) => (
						<FormValueSelector
							handleChange={(updatedPropertyData) => {
								setFormState((prevState) => {
									const newState = [...prevState];
									newState[index] = updatedPropertyData;
									return newState;
								});
							}}
							key={propertyData.id}
							propertyData={propertyData}
							onDelete={() => {
								console.log(index);
								setFormState(removeItemAtIndex(formState, index));
							}}
						/>
					))}
				</Box>
				<CMSButton
					style={{
						backgroundColor: '#FF6447',
						borderRadius: '8px',
						border: 'none',
						color: 'white',
						padding: '10px 15px',
						fontWeight: '600',
						fontSize: '1.2rem',
					}}
					onClick={() => {
						error && setError(false);
						setFormState([
							...formState,
							{
								name: '',
								type: PropertyType.STRING,
								value: '',
								id: uuidv4(),
							},
						]);
					}}
				>
					Add Entry
				</CMSButton>
				<CMSButton
					style={{
						backgroundColor: '#FF6447',
						borderRadius: '8px',
						border: 'none',
						color: 'white',
						padding: '10px 15px',
						fontWeight: '600',
						fontSize: '1.2rem',
					}}
					onClick={async () => {
						try {
							if (formState.length === 0) {
								setError(true);
								return;
							} else setError(false);
							insertData(uuidv4(), user.get('ethAddress'), formState);
						} catch (e) {
							console.log(e);
						}
					}}
				>
					Submit
				</CMSButton>
				{error && (
					<Text>
						Please add at least one set of fields before submitting.
					</Text>
				)}
			</VStack>
		</Flex>
	);
}

function removeItemAtIndex(arr, index) {
	return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

async function insertData(projectId, userId, formData) {
	// file post request returns an ipfs link then replaces a parameter's value with it
	for (const fields of formData) {
		let fileLinkSet = false;

		if (fields.value instanceof File) {
			const { data: response } = await axios.post(
				'https://filecoin-uploader.herokuapp.com/uploads/upload',
				{ file: fields.value }
			);

			if (!response) {
				console.log('Error: ipfs link not returned');
				return;
			}

			console.log(response);

			fields.value = response; // set the parameter's value to ipfs link
			fileLinkSet = true;
		}

		if (fileLinkSet) break;
	}

	const tableland = await connect({
		network: 'testnet',
		chain: 'polygon-mumbai',
	});
	console.log('tableland: ', tableland);
	const signature = await tableland.siwe();
	console.log('signature: ', signature);

	const tableName = `cms_table_80001_2622`;

	const writeRes = await tableland.write(
		`INSERT INTO ${tableName} (id, user_id, project_data) VALUES ('${projectId}', '${userId}', '${JSON.stringify(
			formData
		)}');`
	);

	console.log(writeRes);
}

async function readData() {
	const tableland = await connect({
		network: 'testnet',
		chain: 'polygon-mumbai',
	});
	const readRes = await tableland.read(`SELECT * FROM cms_table_80001_2622;`);
}

async function createTableLandTable() {
	const tableland = await connect({
		network: 'testnet',
		chain: 'polygon-mumbai',
	});
	await tableland.siwe();
	const { name } = await tableland.create(
		`id text, user_id text, project_data text, primary key (id)`,
		{
			prefix: `cms_table`,
		}
	);
	console.log(name);
}
