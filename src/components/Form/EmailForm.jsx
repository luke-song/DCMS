import {
	FormControl,
	FormLabel,
	Input,
	Button,
	VStack,
	Textarea
} from "@chakra-ui/react"
import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

export default function EmailForm() {
	const form = useRef()

	const sendEmail = (e) => {
		e.preventDefault()
		emailjs.sendForm('contact_service', 'contact_form', form.current, '3N2FH8Rf_RLs67D4S')
			.then(() => {
				alert("Message Sent, We will get back to you shortly");
			}, (error) => {
				console.log(error.text);
				alert("An error occurred, Please try again");
			})
		e.target.reset()
	};
	return (
		<form ref={form} onSubmit={sendEmail}>
			<FormControl textAlign="center">
				<VStack align="left">
					<div>
						<FormLabel color="white" fontWeight="bold">
							Name:
						</FormLabel>
						<Input
							isRequired
							name="user_name"
							sx={{ ":focus": { background: "white" } }}
							type="text"
							variant="filled"
							borderRadius={20}
						/>
					</div>
					<div>
						<FormLabel color="white" fontWeight="bold">
							Email:
						</FormLabel>
						<Input
							isRequired
							name="user_email"
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
						<Textarea
							isRequired
							name="message"
							sx={{ ":focus": { background: "white" } }}
							type="email"
							variant="filled"
							borderRadius={10}
						/>
					</div>
				</VStack>
				<Button
					type="submit"
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
		</form>
	);
}
