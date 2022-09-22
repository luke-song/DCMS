export default function CMSInput({ children, style, ...props }) {
  return (
    <input
      style={{ padding: '8px', border: 'solid 1px grey', ...style }}
      {...props}
    >
      {children}
    </input>
  )
}
