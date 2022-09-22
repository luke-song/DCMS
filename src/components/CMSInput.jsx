export default function CMSInput({ children, style, ...props }) {
	return (
		<input
			style={{ padding: '8px 5px', border: 'solid 1px grey', ...style }}
			{...props}
		>
			{children}
		</input>
	);
}
