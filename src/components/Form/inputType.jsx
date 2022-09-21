import { Input } from "@chakra-ui/react";

export default function InputType(props) {
	const { values, handleChange } = props;
	let styles = {};
	if (values.type === "File") {
		styles = {
			bg: "white",
			variant: "unstyled",
		};
	} else {
		styles = {
			sx: { ":focus": { bg: "white" } },
			variant: "filled",
		};
	}
	return (
		<Input
			name="value"
			type={values.type}
			value={values.value}
			onChange={handleChange}
			{...styles}
		/>
	);
}
