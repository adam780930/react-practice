export default function Button({ buttonName, ...props }) {
  return <button {...props}>{buttonName}</button>;
}
