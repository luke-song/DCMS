export default function CMSButton({ children, style, ...props }) {
	return (
		<button
			style={{
				padding: '4px 10px',
				border: 'solid 1px grey',
				boxShadow: '0px 3px 4px gray',
				...style,
			}}
			{...props}
		>
			{children}
		</button>
	);
}
