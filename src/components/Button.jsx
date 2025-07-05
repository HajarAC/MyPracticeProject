export default function Button({ children, ...props }) {
  return <button className="add-button" {...props} > {children}</button>;
}
