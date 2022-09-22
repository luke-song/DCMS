export default function CMSButton({ children, style, ...props }) {
  return (
    <button
      style={{ padding: '4px 10px', border: 'solid 1px grey', ...style }}
      {...props}
    >
      {children}
    </button>
  )
}
